import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Section (Mobile Only) */}
      <header className="flex-none sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold">My Profile</h1>
          <button className="p-2 -mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
            <span className="material-symbols-outlined text-[24px]">more_vert</span>
          </button>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-1 pb-24 md:pb-6 md:grid md:grid-cols-12 md:gap-8 md:items-start">
        {/* Profile Summary */}
        <section className="px-4 py-6 md:px-6 md:col-span-4 lg:col-span-3 md:sticky md:top-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary p-1 bg-surface-dark">
                <img 
                  alt="Professional portrait of a developer" 
                  className="w-full h-full object-cover rounded-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlDXX6PbPEY6BNdXlUPQMbtNqf0l25gfQBc9s96MXJvnGHVhErTLsBcaWw3UxzwFFoGcU8AVueXpvF-9Lbs48VVdMw9RlaUXYZpmXYjryB9vNDh6EKiE7v7KtuPoCWRAp3TkuTBuq0aGq7FTHDTDWfQeDYynTfleZB1U-wPvKIDFrmsPZe26olVnN7naBMTjm90bmGp_kYbOIcK7I2jFcDkZUg45NjPZ1PJtTJbtqrwqir-M-5t6WFB1Q_2l03MWnLHC8c73lKOQ"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5 border-4 border-white dark:border-surface-dark flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h2>
            <p className="text-primary font-medium text-sm mt-1">Senior Frontend Engineer</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
              Passionate about building scalable web applications and intuitive user interfaces.
            </p>
            <div className="mt-5 w-full">
              <a href="#" className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transform duration-200">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Right Column for Desktop */}
        <div className="md:col-span-8 lg:col-span-9">
            {/* Technical Proficiency Section */}
            <section className="px-4 pt-2 pb-6 md:px-6 md:pt-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  Technical Proficiency
                </h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Updated Today</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Frontend Skills (Circular) */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Frontend Core</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* Skill 1: React */}
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
                            <circle className="text-primary transition-all duration-1000 ease-out group-hover:text-blue-400" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset="22.6" strokeLinecap="round" strokeWidth="6"></circle>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold dark:text-white">90%</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">React</span>
                    </div>
                    {/* Skill 2: Vue */}
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
                            <circle className="text-primary/80 transition-all duration-1000 ease-out group-hover:text-blue-400/80" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset="56.5" strokeLinecap="round" strokeWidth="6"></circle>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold dark:text-white">75%</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Vue</span>
                    </div>
                    {/* Skill 3: CSS */}
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
                            <circle className="text-primary transition-all duration-1000 ease-out group-hover:text-blue-400" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset="11.3" strokeLinecap="round" strokeWidth="6"></circle>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold dark:text-white">95%</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">CSS</span>
                    </div>
                    </div>
                </div>
                {/* Tools Skills (Linear) */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary">
                      <span className="material-symbols-outlined text-[20px]">build</span>
                    </div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Tools & Systems</h4>
                    </div>
                    <div className="space-y-6">
                    {/* Tool 1 */}
                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                        <span className="text-slate-700 dark:text-slate-200">Git & Version Control</span>
                        <span className="text-primary">Expert</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-blue-400 h-full rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    {/* Tool 2 */}
                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                        <span className="text-slate-700 dark:text-slate-200">Figma / UI Design</span>
                        <span className="text-primary/80">Intermediate</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary/80 to-blue-400/80 h-full rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    {/* Tool 3 */}
                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                        <span className="text-slate-700 dark:text-slate-200">Webpack / Vite</span>
                        <span className="text-primary">Advanced</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-blue-400 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>

            {/* Experience Timeline */}
            <section className="px-4 pt-4 pb-6 md:px-6">
            <h3 className="text-lg font-bold mb-6 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history_edu</span>
              Career Timeline
            </h3>
            <div className="relative pl-4 space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                {/* Timeline Item 1 (Current) */}
                <div className="relative pl-8 group">
                {/* Node */}
                <div className="absolute left-0 top-1.5 w-[34px] h-[34px] -ml-[17px] bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark z-10">
                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(19,127,236,0.2)] group-hover:shadow-[0_0_0_6px_rgba(19,127,236,0.3)] transition-shadow duration-300"></div>
                </div>
                {/* Content Card */}
                <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300 cursor-default group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">Senior UI Engineer</h4>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary w-fit">2022 - Present</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">business</span>
                      TechCorp Inc.
                    </p>
                    <ul className="text-sm text-slate-500 dark:text-slate-400 list-disc list-inside space-y-1.5 marker:text-primary">
                    <li>Leading the frontend architecture migration to Next.js</li>
                    <li>Mentoring 3 junior developers</li>
                    <li>Improved site performance by 40%</li>
                    </ul>
                </div>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative pl-8 group">
                {/* Node */}
                <div className="absolute left-0 top-1.5 w-[34px] h-[34px] -ml-[17px] bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark z-10">
                    <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full group-hover:bg-primary/70 transition-colors"></div>
                </div>
                {/* Content Card */}
                <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300 cursor-default group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">Frontend Developer</h4>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-fit">2019 - 2022</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">business</span>
                      CreativeAgency
                    </p>
                    <ul className="text-sm text-slate-500 dark:text-slate-400 list-disc list-inside space-y-1.5 marker:text-slate-400">
                    <li>Developed 15+ client websites using Vue.js</li>
                    <li>Collaborated with design team on design systems</li>
                    </ul>
                </div>
                </div>
                {/* Timeline Item 3 (Education) */}
                <div className="relative pl-8 group">
                {/* Node */}
                <div className="absolute left-0 top-1.5 w-[34px] h-[34px] -ml-[17px] bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark z-10">
                    <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full group-hover:bg-primary/70 transition-colors"></div>
                </div>
                {/* Content Card */}
                <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300 cursor-default group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">BS Computer Science</h4>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-fit">2015 - 2019</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">school</span>
                      University of Technology
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Graduated with Honors, specialized in Human-Computer Interaction.</p>
                </div>
                </div>
            </div>
            </section>
        </div>
      </main>
    </div>
  );
}
