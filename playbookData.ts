export interface PlaybookStep {
    stepNumber: number;
    title: string;
    post: string;
    meaning: string[];
    implementation: {
        title: string;
        points: string[];
    }[];
    outcome?: string;
}

export const PLAYBOOK_STEPS: PlaybookStep[] = [
    {
        stepNumber: 1,
        title: "Ship the Product",
        post: "1. opus 4.6 / codex 5.3 → ship the product (core features, backend, auth, infra)",
        meaning: [
            "Use engineering tools (AI coding assistants etc.) to build a usable product:",
            "Clear problem it solves.",
            "Core features implemented.",
            "Basic UX is good enough.",
            "Auth, billing, infrastructure working reliably."
        ],
        implementation: [
            {
                title: "Define one simple offer",
                points: [
                    "Who is it for?",
                    "What painful problem do you solve?",
                    "What outcome can you promise?"
                ]
            },
            {
                title: "Build only what’s needed for that promise",
                points: [
                    "One core workflow (e.g., generate social posts, manage tasks, send emails).",
                    "Minimal onboarding and payment (Stripe, Gumroad, etc.).",
                    "Error handling and basic analytics (e.g., PostHog, Plausible)."
                ]
            },
            {
                title: "Set a “good enough” launch bar",
                points: [
                    "Can a stranger land on the site, understand the value in 10 seconds, sign up, and get the outcome within 5–10 minutes?",
                    "If yes, stop adding features and move to step 2."
                ]
            }
        ],
        outcome: "Your goal: stop tinkering once the product works; shift energy into marketing."
    },
    {
        stepNumber: 2,
        title: "Design the Marketing Playbook",
        post: "2. claude code → design the playbook (content formats, hook templates, lead magnets, reply rules, tone of voice, weekly experiments)",
        meaning: [
            "Before posting, design a repeatable content and growth system.",
            "Treat this like product design: a spec for how your marketing works."
        ],
        implementation: [
            {
                title: "Content Formats",
                points: [
                    "Choose 2–3 repeatable types (e.g., 'Before/after' case studies, 'X mistakes' threads, 'Build in public' updates).",
                    "Define formats for LinkedIn/YouTube (e.g., '60-sec tutorial', 'idea teardown')."
                ]
            },
            {
                title: "Hook Templates",
                points: [
                    "Write 10–20 starting lines (e.g., 'You’re doing X when you should be doing Y…', 'Steal my system for [result] in 10 minutes').",
                    "Keep them in a doc so AI can plug in new angles."
                ]
            },
            {
                title: "Lead Magnets",
                points: [
                    "Free assets (PDF, Notion template, checklist) to collect emails.",
                    "Each main content format should point to one of these."
                ]
            },
            {
                title: "Reply Rules & Tone",
                points: [
                    "Reply within 24h, ask follow-up questions, send lead magnet links to interested leads.",
                    "Define 3–5 style bullets (e.g., 'Direct, no fluff', 'Personal failures + numbers')."
                ]
            }
        ],
        outcome: "Outcome of step 2: a written “Marketing Playbook” doc that you can hand to AI/automation."
    },
    {
        stepNumber: 3,
        title: "Run the Playbook 24/7 with Automation",
        post: "3. openclaw → run the playbook 24/7 (ads, post drafts, build free tools, repurpose content, create campaigns, reply to comments + dms, send follow-ups, queue experiments)",
        meaning: [
            "Use tools/AI/automation to execute that playbook constantly, not just when you remember.",
            "Think of this as your always-on marketing engine."
        ],
        implementation: [
            {
                title: "Content Production Pipeline",
                points: [
                    "Intake: Log raw ideas in Notion/Docs.",
                    "AI Expansion: Automation (n8n + LLM) turns ideas into drafts for tweets, posts, scripts.",
                    "Human Edit: Review and tweak.",
                    "Scheduler: Push to Buffer/Publer."
                ]
            },
            {
                title: "Repurposing System",
                points: [
                    "One piece of content → multiple formats (Video → Article → Thread → Email).",
                    "Automation watches a folder, generates variants, and queues them."
                ]
            },
            {
                title: "Engagement & Follow-up",
                points: [
                    "AI drafts replies to comments (n8n listener → AI → draft).",
                    "Trigger email sequences (3–7 emails) for new signups/downloads.",
                    "Personalize based on user data."
                ]
            }
        ],
        outcome: "Outcome of step 3: your playbook is operationalized: content keeps going out, leads are nurtured, and you mainly supervise."
    },
    {
        stepNumber: 4,
        title: "Dashboards and Doubling Down",
        post: "4. dashboards → decide what to double down on (saves, shares, replies, clicks, signups)",
        meaning: [
            "You need measurement to know which parts of the system work, so you can do more of them."
        ],
        implementation: [
            {
                title: "What to Track",
                points: [
                    "Top-of-funnel: Impressions, Saves, Shares, Follower growth.",
                    "Mid-funnel: Comments, DMs, Link clicks.",
                    "Bottom-of-funnel: Email signups, Trial/Demo bookings, Revenue."
                ]
            },
            {
                title: "How to Build Dashboards",
                points: [
                    "Start simple: Single sheet or Notion DB.",
                    "Weekly ritual: Log best performing content (Hook, Topic, CTA).",
                    "Later: Connect GA4, Native Analytics, CRM via Looker Studio."
                ]
            },
            {
                title: "Double Down",
                points: [
                    "Make more content with winning hooks and topics.",
                    "Kill things that don't drive results.",
                    "Feed learnings back into Step 2 and 3."
                ]
            }
        ]
    }
];
