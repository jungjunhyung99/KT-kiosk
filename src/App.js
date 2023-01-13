import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Main from './Main';
import React from "react";
import OneToFifty from "./OneToFifty";
import Item from "./Item";
import Hamburger_single from './Hamburger_single';
import Hamburger_set from './Hamburger_set';
import Hamburger_beverage from './Hamburger_beverage';
import Icecream from './Icecream';
import Icecream_cone from './Icecream_cone';
import Icecream_bar from './Icecream_bar';
import Icecream_cup from './Icecream_cup';
import Icecream_pencil from './Icecream_pencil';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Explain" element={<Explain />} />
      <Route path="/OneToFifty" element={<OneToFifty />} />
      <Route path="Item" element={<Item/>} />
      <Route path="Hamburger_single" element={<Hamburger_single/>} />
      <Route path="Hamburger_set" element={<Hamburger_set/>} />
      <Route path="Hamburger_beverage" element={<Hamburger_beverage/>} />\
      <Route path="Icecream" element={<Icecream/>} />
      <Route path="Icecream_cone" element={<Icecream_cone/>} />
      <Route path="Icecream_bar" element={<Icecream_bar/>} />
      <Route path="Icecream_cup" element={<Icecream_cup/>} />
      <Route path="Icecream_pencil" element={<Icecream_pencil/>} />
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
