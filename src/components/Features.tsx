import { FileText, Mic, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Smart Resume Builder',
    description:
      'Create a polished, recruiter-ready resume in minutes with guided sections and professional templates tailored to your field.',
  },
  {
    icon: Mic,
    title: 'AI Interview Preparation',
    description:
      'Practice common and role-specific interview questions, get instant feedback on your answers, and build confidence before the big day.',
  },
  {
    icon: Lightbulb,
    title: 'Resume Improvement Suggestions',
    description:
      'Receive clear, actionable suggestions to strengthen your resume — from better wording to missing skills and formatting tips.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-gradient">
            Features
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Everything you need to land the job
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Three powerful tools designed to take you from application to offer.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:from-blue-500/5 group-hover:to-purple-500/10 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6 text-blue-400" />
              </span>
              <h3 className="relative mt-6 text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="relative mt-3 text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
