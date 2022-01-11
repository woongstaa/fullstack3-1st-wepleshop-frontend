import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login/Login';
import Home from '../src/pages/home/Home';
import Detail from './pages/Detail/Detail';
import Flow from './pages/flowcard/FlowCard';
import List from './pages/ProductList/List';
import Card from './pages/flowcard/card';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/list" element={<List />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
