import React from 'react';
import { useWatchlist } from '../../context/WatchlistContext';
import './WatchlistButton.css';

function WatchlistButton({ item }) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const isInWatchlist = watchlist.some((i) => i.id === item.id);

  const handleClick = () => {
    if (isInWatchlist) {
      removeFromWatchlist(item.id);
    } else {
      addToWatchlist(item);
    }
  };

  return (
    <button 
      className={`watchlist-btn ${isInWatchlist ? 'in-watchlist' : ''}`}
      onClick={handleClick}
    >
      {isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
    </button>
  );
}

export default WatchlistButton;