import { Briefcase } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#how-it-works' },
  { label: 'Contact', href: '#footer' },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 bg-[#080b20]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                <Briefcase className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold text-white tracking-tight">
                Career<span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="mt-4 text-slate-400 leading-relaxed">
              CareerAI helps college students and job seekers build better resumes
              and prepare for interviews — powered by AI.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CareerAI. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for the next generation of job seekers.
          </p>
        </div>
      </div>
    </footer>
  );
}
