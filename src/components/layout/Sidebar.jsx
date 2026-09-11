import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Clock, 
  TrendingUp, 
  Grid, 
  Bookmark, 
  Settings, 
  User,
  Search,
  Activity
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar() {
  const { user } = useAuth();
  if (!user) return null;

  const links = [
    { to: "/dashboard", label: "Intelligence Hub", icon: LayoutDashboard },
    { to: "/latest", label: "Latest Wire", icon: Clock },
    { to: "/trending", label: "Developing Stories", icon: TrendingUp, badge: "Live" },
    { to: "/categories", label: "Category Matrix", icon: Grid },
    { to: "/search", label: "Deep Search", icon: Search },
    { to: "/saved", label: "Monitored Stories", icon: Bookmark },
    { to: "/settings", label: "Settings & AI", icon: Settings },
    { to: "/profile", label: "Analyst Profile", icon: User },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-4 shrink-0">
      
      {/* Cluster Engine Status Banner */}
      <div className="mb-6 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Cluster Engine</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full uppercase">
          Active
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1.5 flex-1">
        {links.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all
              ${isActive 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}
            `}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
            {badge && (
              <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Editorial Mission Card */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
          <p className="text-[11px] font-bold text-blue-900 dark:text-blue-200">The NewsPulse Guarantee</p>
          <p className="text-[10px] text-blue-700/80 dark:text-blue-400/80 mt-1 leading-relaxed">
            Every story displays transparent multi-source delta diffs so you instantly see what changed without duplicate reading.
          </p>
        </div>
      </div>
    </aside>
  );
}
