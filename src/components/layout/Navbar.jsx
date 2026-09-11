import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Newspaper, Bell, Search, Moon, Sun, Flame, LogOut, CheckCheck, Menu, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { DEMO_NOTIFICATIONS } from '../../data/demoData';

export default function Navbar({ onSimulate, onToggleMobileNav }) {
  const { user, logout, theme, toggleTheme } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(DEMO_NOTIFICATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors">
      <div className="flex min-h-16 items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
        
        {/* Brand & Mobile Hamburger */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-6">
          {user && (
            <button
              onClick={onToggleMobileNav}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}

          <Link to={user ? "/dashboard" : "/"} className="flex min-w-0 items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25 group-hover:bg-blue-500 transition-all">
              <Newspaper className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="truncate text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                NewsPulse <span className="text-blue-500 text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 uppercase font-bold tracking-wide">AI</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight -mt-1 hidden sm:inline">
                Developing Story Intelligence
              </span>
            </div>
          </Link>
        </div>

        {/* Global Search Bar */}
        {user && (
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search developing stories, topics, entities..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
              />
            </div>
          </form>
        )}

        {/* Header Right Actions */}
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-3">
          
          {/* Demo Simulation Action Button */}
          {user && onSimulate && (
            <button
              onClick={onSimulate}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-all shadow-sm cursor-pointer"
              title="Inject a simulated breaking update into a story"
            >
              <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span className="hidden sm:inline">Simulate Update</span>
            </button>
          )}

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Notifications Dropdown */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-[min(90vw,24rem)] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50 p-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Developing Story Alerts</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold">
                        {unreadCount} new
                      </span>
                    </div>
                    <button 
                      onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                      className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                    >
                      <CheckCheck className="h-3.5 w-3.5" /> Mark all read
                    </button>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto custom-scrollbar">
                    {notifications.map(n => (
                      <Link 
                        key={n.id} 
                        to={`/story/${n.storyId}`}
                        onClick={() => setShowNotifications(false)}
                        className={`block p-2.5 rounded-xl text-xs transition-colors ${n.read ? 'bg-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/60' : 'bg-blue-50/60 dark:bg-blue-950/40 text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/70 font-medium'}`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-slate-900 dark:text-white">{n.title}</span>
                          <span className="text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{n.message}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* User Profile / Auth State */}
          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <Link to="/profile" className="flex items-center gap-2 group">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 ring-2 ring-blue-500/20">
                  <User className="h-4 w-4" />
                </span>
                <span className="hidden xl:inline text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-500">
                  {user.name}
                </span>
              </Link>
              <button
                onClick={logout}
                className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-500"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 shadow-sm"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
