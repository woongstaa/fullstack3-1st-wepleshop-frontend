import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Test from './components/top/Top';
// import Test from './components/footer/Footer';
// import Test from './components/nav/Nav';
import Test from './pages/home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
