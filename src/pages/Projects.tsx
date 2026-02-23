import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'React', 'Next.js', 'Vue', 'Angular'];

  return (
    <div className="flex flex-col h-full">
      {/* Header & Filters */}
      <div className="flex flex-col bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 z-10 shrink-0 sticky top-0 md:static md:bg-transparent md:border-none md:mb-6">
        {/* Top Bar (Mobile Only) */}
        <div className="flex items-center px-6 py-4 justify-between md:hidden">
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1">Selected Works</h2>
          <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        
        {/* Desktop Title */}
        <div className="hidden md:flex items-center justify-between mb-6">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Selected Works</h2>
        </div>

        {/* Tags / Filters Scroll */}
        <div className="flex gap-2 px-6 pb-3 md:px-0 md:pb-0 overflow-x-auto no-scrollbar md:flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full font-medium text-xs transition-colors border ${
                filter === f
                  ? 'bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 border-transparent'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 px-6 py-4 md:p-0 space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {/* Project Card 1 */}
        <div className="group flex flex-col bg-white dark:bg-[#1c2127] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md hover:-translate-y-1">
          <div className="relative w-full aspect-video overflow-hidden">
            <div 
              aria-label="Modern dashboard interface displaying financial charts and data analytics graphs" 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              role="img" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSs11SBy6wk_A8XV1hPjVHO4MPUgTfi3zq4iRlkWSc75AWaSI7ov7IgrAI-G76jGECE24UaMdbtCLBo8v7AohZv2sKmeEB5Zf4aXIeC7KJ3JoopaIcYcQqKTiTXhaQ74tcVjHETBSDd-jVf6lCRnIRckwV05fDMAmIK-uT-YeX3iZDj7CJBVuvMhBXNO4yoBTblb3j1VtX1EFkqh46DaF43IdflMY_5hzrWDCg6gBM9k9mHb1R_-qMiMV23YnkaMVqipCAih_kJw")' }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">FinTrack Dashboard</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  A real-time financial analytics tool helping users visualize spending habits with interactive D3 charts.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">React</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">D3.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Firebase</span>
            </div>
            <div className="flex gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                Live Demo
              </a>
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group flex flex-col bg-white dark:bg-[#1c2127] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md hover:-translate-y-1">
          <div className="relative w-full aspect-video overflow-hidden">
            <div 
              aria-label="Sleek e-commerce product page with minimal design and dark mode toggle" 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              role="img" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDp_uumzaV3mlc5ZTow0nqaDc7Wfq2IEBq4OjHOhki5K17W4YCz0YXYRVBjxPWp5Wua5Hw_xt_UVvgeQLCUM0n2zLbzJQ7pOFAWYAMb51thJQWxcuNrbKaAMp4o7yMFkYpLKaYtWaGvq8Q40QmIfwL3rYEMzOf8PUOt0B0kQIAD0oJxJa2_-PM-RYf5Mvz-UKuWzDrF_kuBydEBwHhFA3YKJB4qNfT5zzm2g6nLr14unMsmFPTTPLyk64_vK25QR5I8b6YiBkJSw")' }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Neon E-Commerce</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  Headless Shopify storefront with optimized SEO, dark mode support, and instant search.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Next.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Tailwind</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Shopify API</span>
            </div>
            <div className="flex gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                Live Demo
              </a>
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group flex flex-col bg-white dark:bg-[#1c2127] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md hover:-translate-y-1">
          <div className="relative w-full aspect-video overflow-hidden">
            <div 
              aria-label="Abstract geometric shapes representing a design system component library" 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              role="img" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmYRCnKu8jG9yefZHliBf4FgIiQZAr5VSxEQ_knxOLDztC0wKdJihtQIzbKlNDihxg4Iuhl-t6z6aaowg7dJ2EKkhqBy-HhCEKRyav6HP2-NHQ9l8E2SrqsvvnGckP4Y-CZYIaZnlgsGb_yjnofIH7z2xUD8bwhgXF9XfSvEnaAlAaaKCXRloyf-nGrPAVYBYyeG_S8bli3NGDd9uo4iE1wshlRNqWBzaVcWSyRjip6ymGFRb7oTrwtdtDlhAcsBXo6K5LZmmgkw")' }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Aura Design System</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  A complete UI kit for internal tools, featuring 40+ accessible components and documentation.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Storybook</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">React</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">Figma</span>
            </div>
            <div className="flex gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                Live Demo
              </a>
              <a href="#" className="flex-1 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
