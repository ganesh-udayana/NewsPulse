import React, { useState, useEffect } from 'react';
import { fetchAllStories } from '../services/newsApi';
import { Link } from 'react-router-dom';

const CATS = ['All', 'Technology', 'Science', 'Energy', 'Cybersecurity'];

export default function CategoriesPage() {
  const [selected, setSelected] = useState('All');
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchAllStories().then(setStories);
  }, []);

  const filtered = selected === 'All' ? stories : stories.filter(s => s.category.toLowerCase() === selected.toLowerCase());

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Category Matrix</h1>
        <p className="text-xs text-slate-500">Explore developing intelligence by vertical domain</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {CATS.map(c => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${selected === c ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(story => (
          <div key={story.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <img src={story.image} alt={story.imageAlt} className="w-full h-36 object-cover rounded-lg" />
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 uppercase">
              {story.category}
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              <Link to={`/story/${story.id}`} className="hover:text-blue-500">{story.title}</Link>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{story.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
