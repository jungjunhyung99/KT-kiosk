import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Main from './Main';
import React from "react";
import OneToFifty from "./OneToFifty";
import Item from "./Item";
import Hamburger from './Hamburger';
import Hamburger_single from './Hamburger_single';
import Hamburger_set from './Hamburger_set';
import Hamburger_beverage from './Hamburger_beverage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Explain" element={<Explain />} />
      <Route path="/OneToFifty" element={<OneToFifty />} />
      <Route path="Item" element={<Item/>} />
      <Route path="Hamburger" element={<Hamburger/>} />
      <Route path="Hamburger_single" element={<Hamburger_single/>} />
      <Route path="Hamburger_set" element={<Hamburger_set/>} />
      <Route path="Hamburger_beverage" element={<Hamburger_beverage/>} />
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
