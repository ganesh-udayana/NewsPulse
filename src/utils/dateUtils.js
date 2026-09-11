export function formatTimeAgo(minutes) {
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function getCurrentTimeFormatted() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
