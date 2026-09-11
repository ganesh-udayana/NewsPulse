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

function normalizeNewsDataArticle(article) {
  return {
    title: article.title,
    description: article.description || article.content,
    content: article.content,
    image: article.image_url,
    publishedAt: article.pubDate,
    url: article.link,
    source: { name: article.source_name || article.source_id || 'NewsData.io' }
  };
}

function getRecentStories(articles) {
  return articles
    .filter(article => {
      const publishedAt = Date.parse(article.publishedAt || '');
      return !Number.isNaN(publishedAt) && publishedAt >= Date.now() - 24 * 60 * 60 * 1000;
    })
    .map(normalizeArticle);
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

  try {
    const query = typeof request.query?.q === 'string' ? request.query.q.trim() : '';
    const from = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const to = new Date().toISOString();
    const providers = [];

    if (process.env.GNEWS_API_KEY) {
      const endpoint = query
        ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&max=10&sortby=publishedAt&apikey=${encodeURIComponent(process.env.GNEWS_API_KEY)}`
        : `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${encodeURIComponent(process.env.GNEWS_API_KEY)}`;
      providers.push(async () => {
        const result = await fetch(endpoint);
        return { name: 'GNews', response: result, articles: (await result.json()).articles || [] };
      });
    }

    if (process.env.NEWSDATA_API_KEY) {
      const endpoint = query
        ? `https://newsdata.io/api/1/latest?apikey=${encodeURIComponent(process.env.NEWSDATA_API_KEY)}&q=${encodeURIComponent(query)}&language=en&size=10`
        : `https://newsdata.io/api/1/latest?apikey=${encodeURIComponent(process.env.NEWSDATA_API_KEY)}&language=en&size=10`;
      providers.push(async () => {
        const result = await fetch(endpoint);
        const payload = await result.json();
        return { name: 'NewsData.io', response: result, articles: (payload.results || []).map(normalizeNewsDataArticle) };
      });
    }

    for (const provider of providers) {
      try {
        const result = await provider();
        if (!result.response.ok) continue;
        const stories = getRecentStories(result.articles);
        if (stories.length > 0) {
          response.setHeader('X-News-Provider', result.name);
          return response.status(200).json(stories);
        }
      } catch (providerError) {
        console.warn('News provider failed; trying next provider:', providerError.message);
      }
    }

    return response.status(503).json({ error: 'No recent news provider returned results' });
  } catch (error) {
    console.error('News provider request failed:', error);
    return response.status(502).json({ error: 'Unable to retrieve live news' });
  }
}
