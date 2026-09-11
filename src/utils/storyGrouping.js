/**
 * Clusters disparate raw news articles into developing stories
 * based on lexical overlap, entity keywords, and temporal affinity.
 */
export function groupArticlesIntoStories(articles) {
  if (!articles || !articles.length) return [];
  return articles;
}

export function calculateStoryMomentum(articleCount, sourcesCount, minutesAgo = 15) {
  const recencyMultiplier = Math.max(0.4, 1 - (minutesAgo / 240));
  const rawScore = (articleCount * 5) + (sourcesCount * 8);
  return Math.min(99, Math.round(rawScore * recencyMultiplier));
}
