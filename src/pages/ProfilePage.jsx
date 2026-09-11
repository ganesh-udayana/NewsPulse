import React from 'react';
import { User, Shield, Bookmark, Bell } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function ProfilePage() {
  const { user, savedStories, followedStories } = useAuth();
  if (!user) return null;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-6 text-left">
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-5">
        <img src={user.avatar} alt={user.name} className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-500/20" />
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">{user.role}</p>
          <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{savedStories.length}</span>
          <p className="text-xs text-slate-500 mt-1">Saved Stories</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{followedStories.length}</span>
          <p className="text-xs text-slate-500 mt-1">Followed Threads</p>
        </div>
      </div>
    </div>
  );
}
