import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<TopNav />} /> */}
        {/* <Route path="/" element={<Slide />} />
        <Route path="/flow" element={<FlowCard />} /> */}
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
