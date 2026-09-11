import { INITIAL_STORIES } from '../data/demoData';

const STORAGE_KEY = 'newspulse_stories_v1';
const SEARCH_STORAGE_KEY = 'newspulse_search_results_v1';

function mergeStoryMedia(stories) {
  const refreshedStories = stories.map(story => {
    const currentStory = INITIAL_STORIES.find(initial => initial.id === story.id);
    return currentStory
      ? { ...story, image: currentStory.image, imageAlt: currentStory.imageAlt }
      : story;
  });

  const storedIds = new Set(stories.map(story => story.id));
  const newStories = INITIAL_STORIES.filter(story => !storedIds.has(story.id));
  return [...refreshedStories, ...newStories];
}

export function getStoredStories() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STORIES));
    return INITIAL_STORIES;
  }
  try {
    const stories = mergeStoryMedia(JSON.parse(data));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
    return stories;
  } catch (e) {
    return INITIAL_STORIES;
  }
}

export function saveStories(stories) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

export async function fetchAllStories(query = '') {
  try {
    const searchParam = query.trim() ? `&q=${encodeURIComponent(query.trim())}` : '';
    const response = await fetch(`/api/news?refresh=${Date.now()}${searchParam}`, {
      cache: 'no-store'
    });
    if (!response.ok) throw new Error(`News API returned ${response.status}`);
    const stories = await response.json();
    if (!Array.isArray(stories)) throw new Error('Invalid news response');
    if (stories.length === 0) throw new Error('No live stories available');
    localStorage.setItem(query.trim() ? SEARCH_STORAGE_KEY : STORAGE_KEY, JSON.stringify(stories));
    const provider = response.headers.get('X-News-Provider') || 'Live provider';
    localStorage.setItem('newspulse_news_status', JSON.stringify({
      source: provider,
      fetchedAt: new Date().toISOString(),
      live: provider !== 'Unavailable' && stories.length > 0
    }));
    return stories;
  } catch (error) {
    console.warn('Using local NewsPulse stories:', error.message);
    localStorage.setItem('newspulse_news_status', JSON.stringify({
      source: 'Local fallback',
      fetchedAt: new Date().toISOString(),
      live: false,
      error: error.message
    }));
    await new Promise(r => setTimeout(r, 180));
    return getStoredStories();
  }
}

export async function getStoryById(id) {
  const stories = getStoredStories();
  const searchResults = JSON.parse(localStorage.getItem(SEARCH_STORAGE_KEY) || '[]');
  return [...stories, ...searchResults].find(s => s.id === id) || null;
}
