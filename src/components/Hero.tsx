import { ArrowRight, Sparkles, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-hero pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          AI-powered career coaching for students
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Your Career. Your Potential.
          <br />
          <span className="text-gradient">Powered by AI.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Build a professional resume and prepare for interviews with CareerAI.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all"
          >
            <FileText className="h-5 w-5" />
            Build My Resume
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
    </section>
  );
}
