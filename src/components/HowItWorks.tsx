import { PencilLine, Sparkle, Trophy } from 'lucide-react';

const steps = [
  {
    icon: PencilLine,
    step: '01',
    title: 'Enter your details',
    description:
      'Add your education, experience, and skills. Our guided builder makes it quick and painless.',
  },
  {
    icon: Sparkle,
    step: '02',
    title: 'Improve your resume',
    description:
      'Get instant, AI-driven suggestions to refine your resume and highlight what recruiters look for.',
  },
  {
    icon: Trophy,
    step: '03',
    title: 'Prepare for your dream job',
    description:
      'Practice tailored interview questions and walk into every interview with confidence.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-gradient">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three steps to your next offer
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A simple, guided path from a blank page to interview-ready.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                <s.icon className="h-7 w-7 text-white" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f1438] text-xs font-bold text-gradient ring-1 ring-white/10">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-sm mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div id="get-started" className="scroll-mt-24" />
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
