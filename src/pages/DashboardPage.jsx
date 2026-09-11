import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Flame, ArrowRight, Bookmark } from 'lucide-react';
import { fetchAllStories } from '../services/newsApi';
import { useAuth } from '../hooks/useAuth';
import WhatsNewSection from '../components/story/WhatsNewSection';

export default function DashboardPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedStatus, setFeedStatus] = useState(null);
  const { savedStories, toggleSaveStory } = useAuth();

  useEffect(() => {
    const refreshStories = () => fetchAllStories().then(data => {
      setStories(data);
      setFeedStatus(JSON.parse(localStorage.getItem('newspulse_news_status') || 'null'));
      setLoading(false);
    });
    refreshStories();
    const intervalId = window.setInterval(refreshStories, 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="p-6 space-y-4 animate-pulse">
        <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
      </div>
    );
  }

  const primaryStory = stories[0];
  const secondaryStories = stories.slice(1);

  return (
    <div className="p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 text-left">
      
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Today's Developing Stories
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time clustering engine showing what changed across global reporting
          </p>
        </div>
        <div className="flex items-center gap-2">
          {feedStatus && (
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${feedStatus.live ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-900 dark:bg-emerald-950/30' : 'text-amber-600 border-amber-200 bg-amber-50 dark:text-amber-400 dark:border-amber-900 dark:bg-amber-950/30'}`}>
              {feedStatus.live ? `${feedStatus.source} • ${new Date(feedStatus.fetchedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Live feed unavailable • showing local data'}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <Flame className="h-3.5 w-3.5 text-blue-500" />
            {stories.length} Active Story Streams
          </span>
        </div>
      </div>

      {/* Featured Primary Developing Story */}
      {primaryStory && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-4 sm:mb-6">
            <img src={primaryStory.image} alt={primaryStory.imageAlt} className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-400 uppercase tracking-wide flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              {primaryStory.status}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {primaryStory.category}
            </span>
            <span className="text-xs text-slate-400">Updated {primaryStory.lastUpdated}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{primaryStory.sources.length} Outlets Tracked</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
            <Link to={`/story/${primaryStory.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {primaryStory.title}
            </Link>
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {primaryStory.summary}
          </p>

          {/* Inline Primary USP Card */}
          <div className="mb-6">
            <WhatsNewSection whatsNew={primaryStory.whatsNew} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link 
              to={`/story/${primaryStory.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all"
            >
              Explore Full Intelligence & Timeline <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => toggleSaveStory(primaryStory.id)}
              className={`p-2 rounded-xl border transition-colors ${savedStories.includes(primaryStory.id) ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-400' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700'}`}
              title="Save story"
            >
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Grid of Other Developing Stories */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-blue-500" />
          Active Evolving Coverage
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {secondaryStories.map(story => (
            <div key={story.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <img src={story.image} alt={story.imageAlt} className="w-full h-40 object-cover rounded-xl mb-4" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {story.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{story.lastUpdated}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  <Link to={`/story/${story.id}`} className="hover:text-blue-500 transition-colors">
                    {story.title}
                  </Link>
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  {story.sources.length} sources • Momentum {story.momentum}%
                </span>
                <Link to={`/story/${story.id}`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                  View Story <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
