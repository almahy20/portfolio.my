import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col h-full">
      {/* Header / Nav (Mobile Only) */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-surface-border md:hidden">
        <Link to="/" className="flex items-center justify-center p-2 rounded-full text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold">Profile</h1>
        <button className="flex items-center justify-center p-2 rounded-full text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 pb-24 md:pb-6 md:grid md:grid-cols-12 md:gap-8 md:items-start">
        {/* Hero Section */}
        <div className="flex flex-col items-center pt-8 pb-6 px-4 md:px-6 md:col-span-4 lg:col-span-3 md:sticky md:top-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full bg-primary blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-32 h-32 rounded-full p-1 bg-background-light dark:bg-background-dark border-2 border-primary">
              <div 
                className="w-full h-full rounded-full bg-cover bg-center" 
                data-alt="Professional headshot of Alex Doe looking confident" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmtVWD7rBpJaesUyGtTRx3KOmrDkIzUp8p1JU_soR9LCT4G3_7O4jT_S3oBLtCPuwsEFeZY5643F42gq0yx1au-4AHHoG3j_JeyaRJQrJYSEHxITlzZgz0dAPjxu1eFfY0dFBJZeb5MUGLYy68gU1x2Pxl4IyxMV9nN2M1pRUwlcu8gXzqro4IdTCWM59OER23qxdYeMkAjCqAkKsvL0lJqK5p4XC-rSJPhDKmiGvIM4J_Nortmgk5M7HCV_KSbmmlbMqfgt26VQ")' }}
              ></div>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-background-light dark:border-background-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] font-bold">check</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Doe</h2>
            <p className="font-medium mt-1 text-primary">Senior Frontend Architect</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-slate-500 dark:text-slate-400 text-sm">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6 w-full max-w-xs">
            <a href="#contact" className="flex-1 bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              Contact
            </a>
            <a href="#" className="flex-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium py-2.5 px-4 rounded-xl transition-colors border border-transparent dark:border-slate-700 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Resume
            </a>
          </div>
        </div>

        {/* Right Column for Desktop */}
        <div className="md:col-span-8 lg:col-span-9 md:pt-8">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 px-4 py-4 mx-4 mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 md:mx-0 md:px-6">
            <div className="text-center flex-1 border-r border-slate-200 dark:border-slate-700 last:border-0">
                <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">8+</div>
                <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">Years Exp</div>
            </div>
            <div className="text-center flex-1 border-r border-slate-200 dark:border-slate-700 last:border-0">
                <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">45</div>
                <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">Projects</div>
            </div>
            <div className="text-center flex-1">
                <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">12</div>
                <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">Awards</div>
            </div>
            </div>

            {/* My Story */}
            <div className="px-4 mb-8 md:px-0">
            <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-6 rounded-full bg-primary"></span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">My Story</h3>
            </div>
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                <p className="mb-3">
                I started coding by hacking MySpace layouts in 2008. Since then, I've obsessed over pixel-perfect UI and clean architecture. 
                </p>
                <p>
                Currently, I specialize in building accessible, performant web applications that delight users. I believe that good code is like a joke: if you have to explain it, it's probably bad.
                </p>
            </div>
            </div>

            {/* What I Do Grid */}
            <div className="px-4 mb-8 md:px-0">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-primary"></span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">What I Do</h3>
                </div>
                <a className="text-sm hover:underline text-primary" href="#">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">brush</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">UI Dev</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Pixel-perfect React & Vue interfaces.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">speed</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Performance</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Core Web Vitals optimization.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">accessibility_new</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">A11y</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">WCAG 2.1 AA Compliance audits.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">terminal</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Architecture</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Scalable frontend systems.</p>
                </div>
            </div>
            </div>

            {/* Tech Stack */}
            <div className="px-4 mb-8 md:px-0">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 rounded-full bg-primary"></span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech}
                </span>
                ))}
            </div>
            </div>

            {/* Fun Facts Horizontal Scroll */}
            <div className="mb-8 md:px-0">
            <div className="px-4 flex items-center gap-2 mb-4 md:px-0">
                <span className="w-1 h-6 rounded-full bg-primary"></span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fun Facts</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-0">
                {/* Fact 1 */}
                <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-start gap-2">
                <span className="text-3xl">☕</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">4 Cups</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Coffee per day consumption</p>
                </div>
                </div>
                {/* Fact 2 */}
                <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-start gap-2">
                <span className="text-3xl">🐧</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Linux</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Arch Linux daily driver</p>
                </div>
                </div>
                {/* Fact 3 */}
                <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-start gap-2">
                <span className="text-3xl">🏃</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Marathon</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Ran 2 marathons in 2023</p>
                </div>
                </div>
                {/* Fact 4 */}
                <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-start gap-2">
                <span className="text-3xl">🎸</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Bass</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Plays in a local band</p>
                </div>
                </div>
            </div>
            </div>

            {/* Footer Quote */}
            <div className="px-8 pb-8 text-center opacity-60 md:px-0">
              <p className="text-sm italic text-slate-500 dark:text-slate-400">"First, solve the problem. Then, write the code."</p>
            </div>

            {/* Contact Section */}
            <div className="px-4 mb-8 md:px-0" id="contact">
              <div className="bg-slate-900 dark:bg-primary rounded-2xl p-6 md:p-8 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to start a project?</h3>
                  <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm md:text-base">I'm currently available for freelance work and open to full-time opportunities.</p>
                  <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm md:text-base">
                    <span className="material-symbols-outlined">mail</span>
                    Send me an email
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
