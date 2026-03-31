import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const leadsFile = path.join(__dirname, 'leads.json');

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Ensure leads file exists
if (!fs.existsSync(leadsFile)) {
  fs.writeFileSync(leadsFile, JSON.stringify([]), 'utf-8');
}

app.post('/api/generate-growth-plan', async (req, res) => {
  const { industry, budget, goals } = req.body;

  if (!industry || !budget || !goals || goals.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const budgetAmount = budget.split('–')[0].trim(); // Extract number from budget range

const prompt = `You are a growth strategy expert for HighBizz AI Growth agency with 200+ successful campaigns. Generate a HIGHLY DETAILED, tactical, and immediately actionable growth strategy in JSON format.

Business Context:
- Industry: ${industry}
- Monthly Budget: ${budget}
- Primary Goals: ${goals.join(', ')}
- Contact Person: ${req.body.leadData?.name || 'Business Owner'}

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

    // Parse the JSON response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not find JSON in response');
    }

    const growthPlan = JSON.parse(jsonMatch[0]);

    // Save lead data
    if (req.body.leadData) {
      const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
      leads.push({
        ...req.body.leadData,
        industry,
        budget,
        goals,
        generatedAt: new Date().toISOString(),
      });
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');
    }

    res.json({ success: true, plan: growthPlan });
  } catch (error) {
    console.error('Error generating growth plan:', error);
    res.status(500).json({ error: error.message || 'Failed to generate growth plan' });
  }
});

// Get all leads (for admin dashboard)
app.get('/api/leads', (req, res) => {
  try {
    const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
    res.json({ success: true, leads, count: leads.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leads' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
