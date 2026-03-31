import Anthropic from '@anthropic-ai/sdk';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const leadsFile = path.join(__dirname, '../.data/leads.json');

// Ensure data directory exists
async function ensureLeadsFile() {
  try {
    const dataDir = path.join(__dirname, '../.data');
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(leadsFile);
    } catch {
      await fs.writeFile(leadsFile, JSON.stringify([]), 'utf-8');
    }
  } catch (error) {
    console.error('Error ensuring leads file:', error);
  }
}

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { industry, budget, goals, leadData } = req.body;

  if (!industry || !budget || !goals || goals.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const prompt = `You are a growth strategy expert for HighBizz AI Growth agency with 200+ successful campaigns. Generate a HIGHLY DETAILED, tactical, and immediately actionable growth strategy in JSON format.

Business Context:
- Industry: ${industry}
- Monthly Budget: ${budget}
- Primary Goals: ${goals.join(', ')}
- Contact Person: ${leadData?.name || 'Business Owner'}

IMPORTANT: Base your strategy on real industry benchmarks and HighBizz's proven methodologies. Focus on quick wins in the first 30 days while building long-term growth systems.

Generate ONLY valid JSON with this exact structure:
{
  "summary": "1-2 sentence executive summary positioning this as a complete roadmap",
  "costEstimate": "Realistic breakdown of how ${budget} budget should be allocated (e.g., 40% ads, 30% creative, 20% tools, 10% contingency)",
  "timeline": "Expected time to see measurable results (typically 2-4 weeks for lead gen, 4-8 weeks for revenue)",
  "channelRecommendations": [
    {
      "channel": "Channel name (e.g., Google Ads, Meta Ads, LinkedIn)",
      "budgetAllocation": "% of total budget (e.g., 40%)",
      "rationale": "2-3 sentences why this channel is critical for ${industry} pursuing ${goals[0]}"
    }
  ],
  "roadmap": {
    "phase1": {
      "duration": "Days 1-30 - Foundation & Quick Wins",
      "focus": "Setup, optimization, and early momentum",
      "deliverables": ["Specific deliverable 1", "Specific deliverable 2", "Specific deliverable 3", "Specific deliverable 4"]
    },
    "phase2": {
      "duration": "Days 31-60 - Scaling & Refinement",
      "focus": "Scale what works, optimize underperformers",
      "deliverables": ["Specific deliverable 1", "Specific deliverable 2", "Specific deliverable 3", "Specific deliverable 4"]
    },
    "phase3": {
      "duration": "Days 61-90 - Optimization & Automation",
      "focus": "Build systems, prepare for scale",
      "deliverables": ["Specific deliverable 1", "Specific deliverable 2", "Specific deliverable 3", "Specific deliverable 4"]
    }
  },
  "expectedKPIs": {
    "week2": {
      "metric": "Key metric to track",
      "target": "Realistic expectation for ${industry}"
    },
    "month1": {
      "metric": "Primary conversion metric",
      "target": "Specific number based on ${budget} budget"
    },
    "month3": {
      "metric": "Revenue or business impact",
      "target": "Expected ROI/outcome"
    }
  },
  "tools": ["Specific tool 1 (why it matters)", "Specific tool 2 (why it matters)", "Specific tool 3 (why it matters)", "Specific tool 4 (why it matters)"],
  "riskMitigation": ["Specific risk in ${industry} and exact mitigation strategy", "Common blocker and solution", "Market risk and contingency"],
  "successMetrics": ["Metric 1 to track weekly", "Metric 2 to track biweekly", "Metric 3 to track monthly", "Metric 4 for course correction"]
}`;

    const message = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not find JSON in response');
    }

    const growthPlan = JSON.parse(jsonMatch[0]);

    // Save lead data
    if (leadData) {
      await ensureLeadsFile();
      try {
        const leadsData = await fs.readFile(leadsFile, 'utf-8');
        const leads = JSON.parse(leadsData);
        leads.push({
          ...leadData,
          industry,
          budget,
          goals,
          generatedAt: new Date().toISOString(),
        });
        await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');
      } catch (error) {
        console.error('Error saving lead:', error);
        // Don't fail the request if lead saving fails
      }
    }

    res.status(200).json({ success: true, plan: growthPlan });
  } catch (error) {
    console.error('Error generating growth plan:', error);
    res.status(500).json({ error: error.message || 'Failed to generate growth plan' });
  }
}
