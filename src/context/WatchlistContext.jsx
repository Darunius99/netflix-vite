import { createContext, useContext, useState } from 'react';

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    if (!watchlist.some((i) => i.id === item.id)) {
      setWatchlist([...watchlist, item]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}