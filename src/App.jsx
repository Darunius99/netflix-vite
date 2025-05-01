import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { WatchlistProvider } from './context/WatchlistContext';
import { useWatchlist } from './context/WatchlistContext';
import { useShop } from './context/ShopContext';
import Home from './pages/Home/Home';
import Watchlist from './pages/Watchlist/Watchlist';
import Shop from './pages/Shop/Shop';
import './App.css';

function NavBar() {
  const { watchlist } = useWatchlist();
  const { cart } = useShop();

  return (
    <nav className="main-nav">
      <Link to="/" className="nav-logo">Cineholic</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/watchlist" className="nav-link">
          Watchlist ({watchlist.length})
        </Link>
        <Link to="/shop" className="nav-link">
          Shop ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <WatchlistProvider>
      <ShopProvider>
        <Router>
          <NavBar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </Router>
      </ShopProvider>
    </WatchlistProvider>
  );
}

export default App;