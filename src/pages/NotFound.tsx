import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-4xl text-slate-400">sentiment_dissatisfied</span>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">404</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Page not found</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
