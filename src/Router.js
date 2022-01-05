import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SlideCard from './components/slidecard';
import FlowCard from './pages/flowcard/folwcard';
import Slide from './pages/slide/slide';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<TopNav />} /> */}
        <Route path="/" element={<Slide />} />
        <Route path="/flow" element={<FlowCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
