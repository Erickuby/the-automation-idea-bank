import { AutomationIdea } from './types';
import { NICHES } from './constants';

const generateMockData = (): AutomationIdea[] => {
  const niches = [...NICHES].filter(n => n !== 'All');

  const baseIdeas: AutomationIdea[] = [
    { id: '1', idea: 'Automatic PR Review Summary', niche: 'Dev', solution: 'GitHub Webhook triggers n8n, diff sent to ChatGPT for summaries in Slack.', tools: ['GitHub', 'n8n', 'ChatGPT'] },
    { id: '2', idea: 'Real Estate Lead Capture', niche: 'Real Estate', solution: 'Sync Zillow leads to Airtable, trigger AI-personalized SMS via Twilio.', tools: ['Airtable', 'Zapier', 'Twilio'] },
    { id: '3', idea: 'Automated Candidate Screening', niche: 'HR', solution: 'Parse resumes with Parseur, evaluate against JD with AI, score in Sheets.', tools: ['Parseur', 'OpenAI', 'Sheets'] },
    { id: '4', idea: 'SaaS Competitor Tracker', niche: 'Marketing', solution: 'Scrape pricing with Browse.ai, push updates to Discord.', tools: ['Browse.ai', 'Discord', 'Make'] },
    { id: '5', idea: 'Client Onboarding Portal', niche: 'Agency', solution: 'Stripe payment success triggers Notion workspace and Slack setup.', tools: ['Stripe', 'Notion', 'Slack'] },
    { id: '6', idea: 'Automated Meeting Minutes', niche: 'Operations', solution: 'Record Zoom, transcribe with Whisper, generate actions with GPT-4.', tools: ['Zoom', 'Whisper', 'GPT-4'] },
    { id: '7', idea: 'Dev Tool: Readme Gen', niche: 'Dev', solution: 'CLI tool scans codebase and generates professional README docs.', tools: ['Node.js', 'OpenAI'] },
    { id: '8', idea: 'Property Valuation Bot', niche: 'Real Estate', solution: 'WhatsApp bot fetches Zillow data and returns a PDF report.', tools: ['WhatsApp', 'Bannerbear', 'n8n'] },
    { id: '9', idea: 'Pulse Survey Analyzer', niche: 'HR', solution: 'Airtable collects Typeform data; sentiment analysis flags high-risk depts.', tools: ['Airtable', 'Typeform', 'Python'] },
    { id: '10', idea: 'LinkedIn Content Recycler', niche: 'Marketing', solution: 'Extract blog posts, rewrite for LinkedIn with Claude, schedule in Buffer.', tools: ['Claude', 'Buffer', 'RSS'] },
    { id: '11', idea: 'Cold Email Personalization', niche: 'Sales', solution: 'Scrape LinkedIn profiles, use AI to find recent wins for email intros.', tools: ['Apollo', 'GPT-4', 'Phantombuster'] },
    { id: '12', idea: 'Personal Expense Tracker', niche: 'Personal', solution: 'Forward bank alerts to email, parse into a Notion database.', tools: ['Zapier', 'Notion', 'Email Parser'] },
    { id: '13', idea: 'Dev Ops: Sentry Alerting', niche: 'Dev', solution: 'Monitor Sentry, auto-create GitHub issues for critical crashes.', tools: ['Sentry', 'GitHub', 'Make'] },
    { id: '14', idea: 'Rental Auto-Responder', niche: 'Real Estate', solution: 'Gmail auto-replies to inquiries with screening links.', tools: ['Gmail', 'Typeform', 'Calendly'] },
    { id: '15', idea: 'Hardware Procurement', niche: 'HR', solution: 'New hire triggers Amazon Business PO for laptops.', tools: ['Gusto', 'Amazon', 'Airtable'] },
    { id: '16', idea: 'Feedback Loop Automation', niche: 'Agency', solution: 'Aggregate feedback to Airtable, cluster themes with AI.', tools: ['Intercom', 'Tally', 'Airtable'] },
    { id: '17', idea: 'Lead Scoring Engine', niche: 'Sales', solution: 'Enrich HubSpot leads with Clearbit, notify Slack of high-value leads.', tools: ['HubSpot', 'Clearbit', 'Slack'] },
    { id: '18', idea: 'Tech Debt Scanner', niche: 'Dev', solution: 'GitHub Action scans for TODOs, compiles weekly report.', tools: ['GitHub Actions', 'Node.js'] },
    { id: '19', idea: 'Multi-Channel FAQ Bot', niche: 'Agency', solution: 'AI bot handles FAQs across Web, WhatsApp, and Telegram.', tools: ['Chatbase', 'Telegram'] },
    { id: '20', idea: 'Industry News Digest', niche: 'Operations', solution: 'Monitor Twitter/X, summarize top stories via Perplexity.', tools: ['Perplexity', 'Make', 'Slack'] },
  ];

  const expanded: AutomationIdea[] = [...baseIdeas];
  const toolset = ['Zapier', 'Make', 'n8n', 'OpenAI', 'Claude', 'Airtable', 'Notion', 'Slack', 'Discord', 'Sheets', 'Stripe', 'Typeform', 'GitHub', 'Python', 'Twilio', 'HubSpot'];

  // Enhanced dictionary to increase entropy and prevent duplicates
  const actions = ['Automated', 'Smart', 'AI-Driven', 'Cloud', 'Real-time', 'Self-Healing', 'Instant', 'Predictive', 'Seamless', 'Dynamic'];
  const devSubjects = ['PR Review', 'Bug Triaging', 'Env Setup', 'Security Scans', 'Doc Updates', 'Schema Migration', 'Test Orchestration', 'Log Analysis'];
  const marketingSubjects = ['Ad Spend Opto', 'Lead Scoring', 'Email Nurture', 'Content Distribution', 'SEO Tracking', 'Social Listening', 'Influencer Discovery', 'Campaign Analytics'];
  const agencySubjects = ['Client Reporting', 'Invoicing', 'Resource Allocation', 'Onboarding Flow', 'Contract Management', 'Design Handoff', 'Review Cycle', 'Upsell Triggers'];
  const realEstateSubjects = ['Lead Nurture', 'Property Listings', 'Contract Audits', 'Closing Logistics', 'Viewing Schedules', 'Escrow Alerts', 'Market Pricing', 'Tenant Screening'];
  const hrSubjects = ['Candidate Sourcing', 'Offboarding', 'Payroll Sync', 'Interview Scheduling', 'Benefits Enrollment', 'Compliance Tracking', 'Employee Feedback', 'Skill Assessments'];
  const salesSubjects = ['Cold Outreach', 'Pipeline Cleanup', 'Meeting Summaries', 'Quote Generation', 'Lead Enrichment', 'Follow-up Sequences', 'Revenue Forecasting', 'Demo Scheduling'];
  const operationsSubjects = ['Stock Alerts', 'Procurement', 'Vendor Payables', 'Workflow Audits', 'Quality Control', 'Asset Tracking', 'Maintenance Schedules', 'Logistics Routing'];
  const pmSubjects = ['Roadmap Sync', 'Feature Backlog', 'User Feedback Synthesis', 'Spec Generation', 'Sprint Planning', 'Stakeholder Updates', 'Metric Tracking', 'UX Research Logs'];
  const founderSubjects = ['Investor Reports', 'Cap Table Management', 'Market Research', 'Burn Rate Monitoring', 'Strategic Goal Tracking', 'Fundraising Pipelines', 'Corporate Filings', 'Exit Readiness'];
  const personalSubjects = ['Budgeting', 'Workout Tracking', 'Knowledge Management', 'Meal Planning', 'Travel Booking', 'Inbox Zero Bot', 'Home Automation', 'Digital Archiving'];

  const getSubjectList = (niche: string) => {
    switch (niche) {
      case 'Dev': return devSubjects;
      case 'Marketing': return marketingSubjects;
      case 'Agency': return agencySubjects;
      case 'Real Estate': return realEstateSubjects;
      case 'HR': return hrSubjects;
      case 'Sales': return salesSubjects;
      case 'Operations': return operationsSubjects;
      case 'Product Management': return pmSubjects;
      case 'Founder': return founderSubjects;
      default: return personalSubjects;
    }
  };

  const generatedTitles = new Set(baseIdeas.map(i => i.idea.toLowerCase()));

  for (let i = 21; i <= 220; i++) {
    const niche = niches[i % niches.length];
    const subjects = getSubjectList(niche);
    const action = actions[i % actions.length];
    const subject = subjects[i % subjects.length];

    // Combining attributes to ensure variety
    let ideaTitle = `${action} ${subject}`;

    // If somehow we hit a duplicate, we append a unique descriptor
    if (generatedTitles.has(ideaTitle.toLowerCase())) {
      const modifiers = ['System', 'Engine', 'Workflow', 'Pipeline', 'Bot', 'Assistant'];
      ideaTitle = `${ideaTitle} ${modifiers[i % modifiers.length]}`;
    }

    generatedTitles.add(ideaTitle.toLowerCase());

    const tools = [
      toolset[i % toolset.length],
      toolset[(i * 3 + 7) % toolset.length]
    ];

    const solution = `A sophisticated implementation using ${tools[0]} and ${tools[1]} to optimize ${niche.toLowerCase()} efficiency by automating ${subject.toLowerCase()} tasks in high-growth environments.`;

    expanded.push({ id: String(i), idea: ideaTitle, niche, solution, tools });
  }

  // Final safety check to ensure zero duplicate titles
  const uniqueItems: AutomationIdea[] = [];
  const seenIdeas = new Set<string>();

  for (const item of expanded) {
    if (!seenIdeas.has(item.idea)) {
      uniqueItems.push(item);
      seenIdeas.add(item.idea);
    }
  }

  return uniqueItems;
};

export const automationData: AutomationIdea[] = generateMockData();
