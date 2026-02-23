import { NavLink, Outlet, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      
      {/* Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">JD.dev</h1>
        </div>
        <div className="flex gap-6">
          <DesktopNavItem to="/" label="Home" />
          <DesktopNavItem to="/projects" label="Projects" />
          <DesktopNavItem to="/skills" label="Skills" />
          <DesktopNavItem to="/about" label="About" />
        </div>
        <Link to="/about" className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity">
          <span>Contact Me</span>
        </Link>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-7xl mx-auto md:px-6 md:py-8 overflow-x-hidden flex flex-col">
        <div className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
      
      {/* Mobile Navigation (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-0 w-full border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-[#1c2127] z-50 safe-area-pb">
        <div className="flex justify-between px-6 pb-5 pt-3">
          <MobileNavItem to="/" icon="home" label="Home" />
          <MobileNavItem to="/projects" icon="work" label="Projects" />
          <MobileNavItem to="/skills" icon="bar_chart" label="Skills" />
          <MobileNavItem to="/about" icon="person" label="About" />
        </div>
      </nav>
    </div>
  );
}

function MobileNavItem({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-1 flex-col items-center justify-end gap-1 transition-colors ${
          isActive ? 'text-primary' : 'text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white'
        }`
      }
    >
      <div className="flex h-8 items-center justify-center">
        <span className={`material-symbols-outlined text-[24px] ${['Skills', 'About'].includes(label) ? 'fill-current' : ''}`}>
          {icon}
        </span>
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
  );
}

function DesktopNavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-400'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
