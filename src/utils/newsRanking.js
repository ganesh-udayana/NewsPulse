export function rankStoriesByMomentum(stories) {
  return [...stories].sort((a, b) => (b.momentum || 0) - (a.momentum || 0));
}

export function filterStoriesByCategory(stories, category) {
  if (!category || category === 'All') return stories;
  return stories.filter(s => s.category.toLowerCase() === category.toLowerCase());
}
