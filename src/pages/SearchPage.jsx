import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { fetchAllStories } from '../services/newsApi';

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setSearchTerm(query);
    fetchAllStories().then(setStories);
  }, [query]);

  const filtered = stories.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-500" />
          Deep Search Intelligence
        </h1>
        <p className="text-xs text-slate-500">Instant cross-referencing across all active storylines</p>
      </div>

      <div className="relative max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter by keyword, entity, category..."
          className="w-full px-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
        />
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-xs text-slate-500">No stories match your criteria.</p>
        ) : (
          filtered.map(story => (
            <div key={story.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 uppercase">
                  {story.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  <Link to={`/story/${story.id}`} className="hover:text-blue-500">{story.title}</Link>
                </h3>
              </div>
              <Link to={`/story/${story.id}`} className="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 rounded-lg hover:underline">
                Explore
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
