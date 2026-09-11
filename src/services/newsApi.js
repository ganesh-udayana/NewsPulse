import { INITIAL_STORIES } from '../data/demoData';

const STORAGE_KEY = 'newspulse_stories_v1';

export function getStoredStories() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STORIES));
    return INITIAL_STORIES;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_STORIES;
  }
}

export function saveStories(stories) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

export async function fetchAllStories() {
  // Realistic brief delay for genuine loading states
  await new Promise(r => setTimeout(r, 180));
  return getStoredStories();
}

export async function getStoryById(id) {
  const stories = getStoredStories();
  return stories.find(s => s.id === id) || null;
}
