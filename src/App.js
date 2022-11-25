import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Main from './Main';
import React from "react";
import OneToFifty from "./OneToFifty";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Explain" element={<Explain />} />
      <Route path="/OneToFifty" element={<OneToFifty />} />
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
