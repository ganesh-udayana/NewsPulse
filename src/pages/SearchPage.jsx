import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { fetchAllStories } from '../services/newsApi';
import StoryImage from '../components/story/StoryImage';

export default function SearchPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const query = params.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const [searchedStories, setSearchedStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchTerm(query);
    setLoading(true);
    fetchAllStories(query).then(results => {
      setStories(results);
      setSearchedStories(results);
      setLoading(false);
    });
  }, [query]);

  const filtered = query ? searchedStories : stories;

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextQuery = searchTerm.trim();
    navigate(nextQuery ? `/search?q=${encodeURIComponent(nextQuery)}` : '/search');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-500" />
          Deep Search Intelligence
        </h1>
        <p className="text-xs text-slate-500">Instant cross-referencing across all active storylines</p>
      </div>

      <form onSubmit={handleSubmit} className="relative max-w-md flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter by keyword, entity, category..."
          className="w-full px-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
        />
        <button type="submit" className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500">Search</button>
      </form>

      {query && !loading && (
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {filtered.length} live results for “{query}”
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-72 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900" />
          ))
        ) : filtered.length === 0 ? (
          <p className="text-xs text-slate-500">No stories match your criteria.</p>
        ) : (
          filtered.map(story => (
            <article key={story.id} className="flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <StoryImage story={story} className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="w-fit rounded bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  {story.category}
                  </span>
                  <span className="text-[10px] text-slate-400">{story.lastUpdated}</span>
                </div>
                <h3 className="mt-3 min-h-[3.5rem] text-sm font-bold leading-snug text-slate-900 dark:text-white">
                  <Link to={`/story/${story.id}`} className="hover:text-blue-500">{story.title}</Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{story.summary}</p>
                <Link to={`/story/${story.id}`} className="mt-auto inline-flex w-fit items-center rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900">
                  Explore story
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
