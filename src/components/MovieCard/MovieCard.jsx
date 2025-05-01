import React from 'react';
import WatchlistButton from '../WatchlistButton/WatchlistButton';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="movie-footer">
          <span className="rating">⭐ {movie.rating}</span>
          <WatchlistButton item={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;