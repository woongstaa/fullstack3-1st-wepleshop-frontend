import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login/Login';
import Home from '../src/pages/home/Home';
import Detail from './pages/Detail/Detail';
import Flow from './pages/flowcard/folwcard';
import List from './pages/ProductList/List';
import Mypage from './pages/mypage/Mypage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
