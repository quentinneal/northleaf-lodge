import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home/home';
import Header from './components/header/header';
import Search from './pages/search/search';
import Restaurant from './pages/restaurant/restaurant';
import Gym from './pages/gym/gym';
import Pool from './pages/pool/pool';
import Ballroom from './pages/ballroom/ballroom';
import Checkout from './pages/checkout/checkout';

import './App.scss';

function App() {

  const location = useLocation();

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`App ${(location.pathname === '/search' || location.pathname === '/checkout') && 'sticky-container'} `}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='restaurant' element={<Restaurant />} />
        <Route path='gym' element={<Gym />} />
        <Route path='pool' element={<Pool />} />
        <Route path='ballroom' element={<Ballroom />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;