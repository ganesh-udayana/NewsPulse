import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bookmark, ArrowLeft, Sparkles, Flame, Clock } from 'lucide-react';
import { getStoryById, saveStories, getStoredStories } from '../services/newsApi';
import { useAuth } from '../hooks/useAuth';
import WhatsNewSection from '../components/story/WhatsNewSection';
import SourceComparison from '../components/story/SourceComparison';
import TimelineView from '../components/story/TimelineView';
import StoryImage from '../components/story/StoryImage';

export default function StoryDetailPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { savedStories, toggleSaveStory, followedStories, toggleFollowStory } = useAuth();

  useEffect(() => {
    getStoryById(id).then(data => {
      setStory(data);
      setLoading(false);
    });
  }, [id]);

  // Demo Simulation trigger for this specific story
  const handleTriggerSimulation = () => {
    if (!story) return;
    const newTimestamp = "Just now";
    const updatedStory = {
      ...story,
      lastUpdated: newTimestamp,
      momentum: Math.min(99, story.momentum + 4),
      status: "Rapidly Developing",
      whatsNew: {
        ...story.whatsNew,
        lastCompared: "Just now vs 20m ago",
        newlyReported: [
          `Live breaking dispatch update recorded at ${new Date().toLocaleTimeString()} by monitored agency wires.`,
          ...story.whatsNew.newlyReported
        ]
      },
      timeline: [
        {
          id: 'sim-' + Date.now(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          headline: "Emergency joint verification update filed by field correspondents",
          source: "NewsPulse Wire (Simulated)",
          tag: "Live Alert"
        },
        ...story.timeline
      ]
    };

    setStory(updatedStory);
    const all = getStoredStories().map(s => s.id === updatedStory.id ? updatedStory : s);
    saveStories(all);
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-400">Loading developing story intelligence...</div>;
  }

  if (!story) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-lg font-bold">Story not found</h2>
        <Link to="/dashboard" className="text-blue-500 underline text-sm mt-2 block">Back to Dashboard</Link>
      </div>
    );
  }

  const isSaved = savedStories.includes(story.id);
  const isFollowed = followedStories.includes(story.id);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-8 text-left">
      
      {/* Back Button & Top Toolbar */}
      <div className="flex items-center justify-between">
        <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Intelligence Hub
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFollowStory(story.id)}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${isFollowed ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            {isFollowed ? '✓ Following Story' : '+ Follow Story'}
          </button>
          <button
            onClick={() => toggleSaveStory(story.id)}
            className={`p-2 text-xs rounded-xl border ${isSaved ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 border-blue-200 dark:border-blue-800' : 'border-slate-200 dark:border-slate-800 text-slate-400'}`}
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Story Header */}
      <div className="space-y-4">
        <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 sm:h-56 lg:h-64">
          <StoryImage story={story} alt="" aria-hidden="true" className="h-full w-full scale-110 object-cover opacity-35 blur-xl" />
          <StoryImage story={story} className="absolute inset-0 h-full w-full object-contain" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 uppercase tracking-wide">
            {story.status}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {story.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="h-3 w-3" /> Updated {story.lastUpdated}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {story.title}
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {story.summary}
        </p>

        {/* Demo Simulation Injection Banner */}
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-semibold text-amber-900 dark:text-amber-200">
              Demo Simulation: Test real-time intelligence delta refresh
            </span>
          </div>
          <button
            onClick={handleTriggerSimulation}
            className="px-3 py-1.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm transition-all cursor-pointer"
          >
            Simulate Breaking Update
          </button>
        </div>
      </div>

      {/* AI Intelligence Briefing */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            AI Story Brief
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Key Established Points:</h3>
            <ul className="space-y-1.5 list-disc list-inside">
              {story.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Why It Matters:</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{story.whyItMatters}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">What to Watch Next:</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{story.whatsNext}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary USP: What's New */}
      <WhatsNewSection whatsNew={story.whatsNew} />

      {/* Source Comparison */}
      <SourceComparison sources={story.sources} agreement={story.sourceAgreement} />

      {/* Chronological Timeline */}
      <TimelineView timeline={story.timeline} />

    </div>
  );
}
