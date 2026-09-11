import { INITIAL_STORIES } from '../data/demoData';

const STORAGE_KEY = 'newspulse_stories_v1';

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

export async function fetchAllStories() {
  // Realistic brief delay for genuine loading states
  await new Promise(r => setTimeout(r, 180));
  return getStoredStories();
}

export async function getStoryById(id) {
  const stories = getStoredStories();
  return stories.find(s => s.id === id) || null;
}
