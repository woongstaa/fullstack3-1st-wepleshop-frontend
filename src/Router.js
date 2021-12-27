import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LoginWoong from './pages/woong/Login/Login_woong';

function Router() {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" element={<LoginWoong />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default Router;
