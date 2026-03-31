import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.post('/api/generate-growth-plan', async (req, res) => {
  const { industry, budget, goals } = req.body;

  if (!industry || !budget || !goals || goals.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const prompt = `You are a growth strategy expert for HighBizz AI Growth agency. Generate a detailed, actionable growth strategy in JSON format.

Business Details:
- Industry: ${industry}
- Monthly Budget: ${budget}
- Goals: ${goals.join(', ')}

Create a comprehensive growth plan with the following structure (respond with valid JSON only):
{
  "summary": "A 1-2 sentence executive summary of the strategy",
  "channelRecommendations": [
    {
      "channel": "Channel name",
      "budgetAllocation": "% of total budget",
      "rationale": "Why this channel for this industry"
    }
  ],
  "roadmap": {
    "phase1": {
      "duration": "Days 1-30",
      "focus": "Key focus areas",
      "deliverables": ["Item 1", "Item 2", "Item 3"]
    },
    "phase2": {
      "duration": "Days 31-60",
      "focus": "Key focus areas",
      "deliverables": ["Item 1", "Item 2", "Item 3"]
    },
    "phase3": {
      "duration": "Days 61-90",
      "focus": "Key focus areas",
      "deliverables": ["Item 1", "Item 2", "Item 3"]
    }
  },
  "expectedKPIs": {
    "month1": {
      "metric": "Expected results",
      "target": "Specific number or %"
    },
    "month2": {
      "metric": "Expected results",
      "target": "Specific number or %"
    },
    "month3": {
      "metric": "Expected results",
      "target": "Specific number or %"
    }
  },
  "tools": ["Tool 1", "Tool 2", "Tool 3"],
  "riskMitigation": ["Risk 1 and mitigation", "Risk 2 and mitigation"]
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
    res.json({ success: true, plan: growthPlan });
  } catch (error) {
    console.error('Error generating growth plan:', error);
    res.status(500).json({ error: error.message || 'Failed to generate growth plan' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
