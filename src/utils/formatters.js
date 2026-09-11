export function truncate(text, length = 120) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
