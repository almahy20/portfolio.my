import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white">JD.dev</span>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter</a>
          <Link to="/about" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
