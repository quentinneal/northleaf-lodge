import React, { useState, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';

import Home from './pages/home/home';
import Header from './components/header/header';
import Search from './pages/search/search';
import Checkout from './pages/checkout/checkout';

function App() {

  const [checkout, setCheckout] = useState([]);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='checkout/complete' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;