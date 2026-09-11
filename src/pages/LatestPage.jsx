import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { fetchAllStories } from '../services/newsApi';
import StoryImage from '../components/story/StoryImage';

export default function LatestPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const refreshStories = () => fetchAllStories().then(data => setStories(data));
    refreshStories();
    const intervalId = window.setInterval(refreshStories, 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-blue-500 mb-2">
          <Clock className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Live dispatches</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Latest Wire</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">The newest updates arriving across every monitored story.</p>
      </div>

      <div className="space-y-3">
        {stories.map(story => (
          <Link key={story.id} to={`/story/${story.id}`} className="group flex gap-4 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-700 transition-colors">
            <StoryImage story={story} className="h-24 w-28 sm:h-28 sm:w-40 rounded-xl object-cover shrink-0" />
            <div className="min-w-0 flex-1 py-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">{story.category}</span>
                <span className="text-[11px] text-slate-400">{story.lastUpdated}</span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2">{story.title}</h2>
              <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">{story.summary}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 self-center shrink-0 group-hover:text-blue-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}
