import React from 'react';
import { useWatchlist } from '../../context/WatchlistContext';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Watchlist.css';

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="empty-message">Adaugati film/serial/anime dorit aici.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map(item => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;