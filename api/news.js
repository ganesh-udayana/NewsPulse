const FALLBACK_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', alt: 'Circuit board representing technology' },
  { url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80', alt: 'Earth viewed from orbit' },
  { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80', alt: 'Solar panels generating renewable energy' },
  { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80', alt: 'Secure network servers in a data center' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80', alt: 'Blue digital circuit board' },
  { url: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=1200&q=80', alt: 'Deep blue ocean surface' },
  { url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80', alt: 'Wind turbines generating renewable energy' },
  { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80', alt: 'Digital security lock' }
];

function getCategory(article) {
  const text = `${article.title} ${article.description || ''}`.toLowerCase();
  if (/hack|cyber|security|malware|ransom|privacy|encryption|data breach/.test(text)) return 'Cybersecurity';
  if (/energy|solar|wind|battery|climate|emission|oil|power grid|renewable/.test(text)) return 'Energy';
  if (/space| nasa |rocket|mars|ocean|biology|research|quantum|scientist|health/.test(text)) return 'Science';
  return 'Technology';
}

function makeId(article, index) {
  const source = article.url || `${article.title}-${index}`;
  return `live-${Array.from(source).reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) | 0, 0)}`;
}

function normalizeArticle(article, index) {
  const category = getCategory(article);
  const image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  const published = article.publishedAt ? new Date(article.publishedAt) : new Date();
  const sourceName = article.source?.name || 'News source';
  const summary = article.description || article.content || 'Open the source article for the latest reporting and context.';
  const headline = article.title || 'Untitled developing story';

  return {
    id: makeId(article, index),
    title: headline,
    category,
    image: article.image || image.url,
    imageAlt: `${category} news image${article.image ? '' : `: ${image.alt}`}`,
    momentum: Math.max(55, 96 - index * 4),
    status: index < 2 ? 'Rapidly Developing' : 'Active',
    lastUpdated: published.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }),
    publishedDate: published.toISOString(),
    summary,
    keyPoints: [summary],
    whyItMatters: `This developing ${category.toLowerCase()} story is being monitored across current reporting.`,
    whatsNext: 'NewsPulse will update this story as more verified coverage arrives.',
    uncertainties: ['Independent confirmation and additional reporting are still developing.'],
    whatsNew: {
      lastCompared: 'Latest API update',
      newlyReported: [summary],
      changedDetails: [],
      conflictingReports: [],
      stillUnknown: ['Further source comparison is pending.']
    },
    sourceAgreement: {
      ratio: 'Single-source intake; verification pending',
      score: 50,
      disclaimer: 'Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score.'
    },
    sources: [{
      id: `source-${index}`,
      name: sourceName,
      headline,
      time: published.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      focus: 'Latest article reporting',
      url: article.url || '#'
    }],
    timeline: [{
      id: `timeline-${index}`,
      time: published.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }),
      headline,
      source: sourceName,
      tag: 'Latest report'
    }]
  };
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store, max-age=0');

  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    return response.status(503).json({ error: 'GNEWS_API_KEY is not configured' });
  }

  try {
    const apiResponse = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${encodeURIComponent(apiKey)}`);
    if (!apiResponse.ok) {
      return response.status(apiResponse.status).json({ error: 'The news provider rejected the request' });
    }

    const payload = await apiResponse.json();
    const stories = (payload.articles || []).map(normalizeArticle);
    return response.status(200).json(stories);
  } catch (error) {
    console.error('News provider request failed:', error);
    return response.status(502).json({ error: 'Unable to retrieve live news' });
  }
}
