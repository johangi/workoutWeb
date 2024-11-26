import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './Layout';
import Chest from './pages/Chest';
import Back from './pages/Back';
import Abs from './pages/Abs';
import Legs from './pages/Legs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="chest" element={<Chest />} />
          <Route path="back" element={<Back />} />
          <Route path="abs" element={<Abs />} />
          <Route path="legs" element={<Legs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);