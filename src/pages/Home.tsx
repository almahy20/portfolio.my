import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen md:min-h-0">
      {/* Mobile Header (Hidden on Desktop) */}
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">JD.dev</h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-6 pt-4 pb-24 md:pb-0 md:justify-center">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6 py-8 md:py-16 text-center max-w-4xl mx-auto w-full">
          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-75 blur-md transition duration-500 group-hover:opacity-100"></div>
            <div 
              className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-2 border-background-light dark:border-background-dark bg-slate-800" 
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5khBNSmvK4iGAnQDQO8L70XXU4401Jrk7erTJOt9BR7CrLDGMGqrLcTpF8Gc6DaLY0jq9ugvG7ykkafS7uz2cMjLGDTQ5pjg5ULPm6B9fE2xakr663_PFjjtOZrP9y7m3TYWlee87hfu3epE6yrGbNQcPglZBVsmX39jYVhIQukItcX0JwnTevXmVqGxaWVCuUD4F15hNw5Ulwy_CebjpLzRO1FHytpf0CjomHWp9A25HokpEARvc6gD3_h5c3AGFN6s_8aJk2g')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
            <div className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background-light bg-green-500 dark:border-background-dark" title="Available for work">
              <span className="material-symbols-outlined text-sm text-white font-bold">check</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Alex Doe</span>
            </h2>
            <p className="mx-auto max-w-xs md:max-w-2xl text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400">
              Crafting pixel-perfect web experiences with modern technologies and a focus on performance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:gap-4">
            <Link to="/projects" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 sm:w-auto">
              <span>View Projects</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link to="/about" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-transparent px-8 text-base font-bold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 sm:w-auto">
              <span>Let's Talk</span>
              <span className="material-symbols-outlined text-lg">chat_bubble</span>
            </Link>
          </div>
        </div>

        {/* Stats / Social Proof */}
        <div className="mt-6 md:mt-12 flex justify-between rounded-2xl bg-slate-100 p-6 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 max-w-3xl mx-auto w-full">
          <div className="flex flex-col items-center flex-1 border-r border-slate-200 dark:border-slate-700">
            <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">5+</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Years Exp</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-r border-slate-200 dark:border-slate-700">
            <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">50+</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Projects</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">100%</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Commitment</span>
          </div>
        </div>

        {/* Tech Stack Ticker */}
        <div className="mt-10 md:mt-16 flex flex-col gap-4 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Recent Tech Stack</h3>
            <Link to="/skills" className="text-sm font-medium text-primary hover:text-blue-400">View All</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 lg:grid-cols-4">
            {/* Tech Item: React */}
            <div className="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-slate-100 p-4 dark:bg-slate-800 w-24 md:w-full border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-[#61DAFB]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" opacity="0"></path><circle cx="12" cy="12" fill="currentColor" r="2"></circle><g transform="rotate(0 12 12)"><ellipse cx="12" cy="12" fill="none" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5"></ellipse></g><g transform="rotate(60 12 12)"><ellipse cx="12" cy="12" fill="none" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5"></ellipse></g><g transform="rotate(120 12 12)"><ellipse cx="12" cy="12" fill="none" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5"></ellipse></g></svg>
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">React</span>
            </div>
            {/* Tech Item: TypeScript */}
            <div className="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-slate-100 p-4 dark:bg-slate-800 w-24 md:w-full border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-[#3178C6]">
                <span className="text-lg font-bold">TS</span>
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">TypeScript</span>
            </div>
            {/* Tech Item: Tailwind */}
            <div className="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-slate-100 p-4 dark:bg-slate-800 w-24 md:w-full border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-[#38BDF8]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0002 12.6C12.0002 12.6 7.2002 9 6.0002 9C4.8002 9 3.6002 9.6 3.6002 10.8C3.6002 12 4.8002 12.6 6.0002 12.6C8.4002 12.6 9.6002 14.4 9.6002 15.6C9.6002 16.8 8.4002 18 6.0002 18C3.6002 18 1.2002 15.6 1.2002 15.6M22.8002 12.6C22.8002 12.6 18.0002 9 16.8002 9C15.6002 9 14.4002 9.6 14.4002 10.8C14.4002 12 15.6002 12.6 16.8002 12.6C19.2002 12.6 20.4002 14.4 20.4002 15.6C20.4002 16.8 19.2002 18 16.8002 18C14.4002 18 12.0002 15.6 12.0002 15.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tailwind</span>
            </div>
            {/* Tech Item: Next.js */}
            <div className="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-slate-100 p-4 dark:bg-slate-800 w-24 md:w-full border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500/10 text-slate-900 dark:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 13.5v-7h2v9.36c-.61.16-1.25.26-1.9.29L8.49 9.15A7.94 7.94 0 0 1 12 4a7.99 7.99 0 0 1 6.85 4.15L16 15.5zm-5.41-3.64l4.63 6.13A7.94 7.94 0 0 1 12 20a7.99 7.99 0 0 1-6.85-4.15l5.44-3.99z" fillRule="evenodd"></path></svg>
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Next.js</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
