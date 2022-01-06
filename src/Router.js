import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login/Login';
import Home from '../src/pages/home/Home';
import Detail from './pages/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
