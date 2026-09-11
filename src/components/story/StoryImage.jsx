import React from 'react';

const FALLBACK_IMAGES = {
  Technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  Science: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
  Energy: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  Cybersecurity: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
};

export default function StoryImage({ story, className, ...props }) {
  const fallback = FALLBACK_IMAGES[story.category] || FALLBACK_IMAGES.Technology;

  const handleError = (event) => {
    if (event.currentTarget.src === fallback) return;
    event.currentTarget.src = fallback;
  };

  return <img src={story.image || fallback} alt={story.imageAlt} onError={handleError} className={className} {...props} />;
}
