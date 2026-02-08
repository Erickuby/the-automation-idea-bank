import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, Rocket, BarChart3, Bot, ChevronRight, Copy, Check } from 'lucide-react';
import { automationData } from '../data';
import { getPlaybookSteps } from '../playbookData';

const IdeaPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const idea = automationData.find(i => i.id === id);
    const [copiedStep, setCopiedStep] = useState<number | null>(null);

    if (!idea) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Idea not found</h2>
                    <Link to="/" className="text-cyan-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const steps = getPlaybookSteps(idea);

    const handleCopyStep = (stepNumber: number, stepData: any) => {
        // Format the step data for copying
        const textToCopy = `
Step ${stepData.stepNumber}: ${stepData.title}
${stepData.post}

THE STRATEGY:
${stepData.meaning.join('\n')}

HOW TO IMPLEMENT:
${stepData.implementation.map((impl: any) => `
${impl.title}:
${impl.points.map((p: string) => `- ${p}`).join('\n')}
`).join('')}

outcome: ${stepData.outcome || ''}
    `.trim();

        navigator.clipboard.writeText(textToCopy);
        setCopiedStep(stepNumber);
        setTimeout(() => setCopiedStep(null), 2000);
    };

    const getStepIcon = (index: number) => {
        switch (index) {
            case 0: return <Rocket className="w-6 h-6" />;
            case 1: return <Target className="w-6 h-6" />;
            case 2: return <Bot className="w-6 h-6" />;
            case 3: return <BarChart3 className="w-6 h-6" />;
            default: return <CheckCircle2 className="w-6 h-6" />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Ideas</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-bl-full pointer-events-none" />

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-50 text-cyan-700 border border-cyan-100 mb-6">
                            {idea.niche}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            {idea.idea}
                        </h1>
                        <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">How to Get Started</h3>
                            <p>{idea.solution}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Playbook Section */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Execution Playbook</h2>
                    <p className="text-slate-500 mb-8 max-w-2xl">
                        Customized 4-step framework to launch <strong>{idea.idea}</strong>.
                    </p>
                </div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.stepNumber}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative group"
                        >
                            <div className="p-8">
                                {/* Copy Button */}
                                <div className="absolute top-6 right-6 z-20">
                                    <button
                                        onClick={() => handleCopyStep(step.stepNumber, step)}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-cyan-50 text-slate-400 hover:text-cyan-600 rounded-lg border border-slate-100 hover:border-cyan-200 transition-all text-xs font-bold uppercase tracking-wider"
                                        title="Copy step to clipboard"
                                    >
                                        <AnimatePresence mode='wait'>
                                            {copiedStep === step.stepNumber ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.5, opacity: 0 }}
                                                    className="flex items-center gap-1.5 text-emerald-600"
                                                >
                                                    <Check className="w-3.5 h-3.5" />
                                                    <span>Copied</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.5, opacity: 0 }}
                                                    className="flex items-center gap-1.5"
                                                >
                                                    <Copy className="w-3.5 h-3.5" />
                                                    <span>Copy Step</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>

                                {/* Step Header */}
                                <div className="flex items-start gap-4 mb-6 pr-24"> {/* Added padding-right to avoid overlap with copy button */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                                        {getStepIcon(index)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                                            <span className="text-cyan-600">Step {step.stepNumber}</span>
                                            {step.title}
                                        </h3>
                                        <div className="mt-2 text-sm font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                                            {step.post}
                                        </div>
                                    </div>
                                </div>

                                {/* Meaning Section */}
                                <div className="mb-8 pl-16">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">The Strategy</h4>
                                    <ul className="space-y-2">
                                        {step.meaning.map((m, i) => (
                                            <li key={i} className="text-slate-700 md:text-lg leading-relaxed">
                                                <span dangerouslySetInnerHTML={{ __html: m.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Implementation Section */}
                                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 ml-0 md:ml-16">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-700 mb-6 flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        How to Implement
                                    </h4>
                                    <div className="space-y-8">
                                        {step.implementation.map((impl, i) => (
                                            <div key={i}>
                                                <h5 className="font-bold text-slate-900 mb-2">{impl.title}</h5>
                                                <ul className="space-y-2">
                                                    {impl.points.map((p, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                                            <span className="leading-relaxed">
                                                                <span dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Outcome Section */}
                                {step.outcome && (
                                    <div className="mt-6 ml-0 md:ml-16 pt-6 border-t border-slate-100">
                                        <p className="text-emerald-700 font-medium flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            {step.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default IdeaPage;
