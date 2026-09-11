import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Flame, ArrowUpRight } from 'lucide-react';
import { fetchAllStories } from '../services/newsApi';

export default function TrendingPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const refreshStories = () => fetchAllStories().then(data => setStories([...data].sort((a, b) => b.momentum - a.momentum)));
    refreshStories();
    const intervalId = window.setInterval(refreshStories, 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-orange-500 mb-2">
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Velocity monitor</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Developing Stories</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ranked by reporting momentum and cross-source activity.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900">
          <Flame className="h-3.5 w-3.5" /> Live ranking
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {stories.map((story, index) => (
          <Link key={story.id} to={`/story/${story.id}`} className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-orange-400 dark:hover:border-orange-700 transition-colors">
            <img src={story.image} alt={story.imageAlt} className="w-full h-44 object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-black text-orange-500">#{index + 1}</span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{story.category}</span>
                <span className="ml-auto inline-flex items-center gap-1 text-xs font-black text-orange-500"><Flame className="h-3.5 w-3.5" /> {story.momentum}%</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-2">{story.title}</h2>
              <div className="mt-4 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-orange-500" style={{ width: `${story.momentum}%` }} />
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span>{story.sources.length} sources tracking</span>
                <span className="inline-flex items-center gap-1 font-bold text-orange-500">Open story <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
