import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { fetchAllStories } from '../services/newsApi';
import StoryImage from '../components/story/StoryImage';

export default function SavedPage() {
  const { savedStories, toggleSaveStory } = useAuth();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchAllStories().then(all => {
      setStories(all.filter(s => savedStories.includes(s.id)));
    });
  }, [savedStories]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-blue-500" />
          Monitored & Bookmarked Stories
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Stories you are actively tracking for real-time diff updates
        </p>
      </div>

      {stories.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-sm text-slate-500">No stories saved yet. Bookmark any story from the dashboard.</p>
          <Link to="/dashboard" className="mt-3 inline-block text-xs font-bold text-blue-500 hover:underline">
            Browse Dashboard →
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {stories.map(story => (
            <div key={story.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4">
              <StoryImage story={story} className="hidden sm:block h-20 w-28 rounded-lg object-cover shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {story.category}
                  </span>
                  <span className="text-xs text-slate-400">{story.lastUpdated}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  <Link to={`/story/${story.id}`} className="hover:text-blue-500">{story.title}</Link>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Link to={`/story/${story.id}`} className="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 rounded-lg hover:underline">
                  View Diff
                </Link>
                <button onClick={() => toggleSaveStory(story.id)} className="p-1.5 text-slate-400 hover:text-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
