import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from 'react-hot-toast';
import './index.css'
import Home from './views/Home.jsx';
import Fruits from './views/Fruits.jsx'
import MYCART from './views/mycart.jsx';

const root = createRoot(document.getElementById
  ("root"));

root.render(
  <BrowserRouter>
    <Toaster position="top-center"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fruits" element={<Fruits />}/>
      <Route path="/mycart" element={<MYCART />}/>
    </Routes>
  </BrowserRouter>,
);
