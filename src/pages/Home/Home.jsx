import React, { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import mediaData from '../../assets/media.json';
import './Home.css';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'movie', 'series', 'anime'];
  
  const filteredMedia = activeCategory === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.category === activeCategory);

  return (
    <div className="home-page">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="media-grid">
        {filteredMedia.map(item => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;