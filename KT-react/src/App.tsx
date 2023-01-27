import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Menu from "./routes/Menu";
import Home from "./routes/Home"
import Chart from './routes/Chart';
import Choice from './routes/Choice';
import MiddleChoice from './routes/MiddleChoice';
import EasyChoice from './routes/EasyChoice';
import HardChoice from './routes/HardChoice';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { createGlobalStyle } from 'styled-components';
import Explain from './routes/Explain';
import { RecoilRoot } from 'recoil';
import Game from './routes/Game';
import Explain2 from './routes/Explain2';
import Cafe from './routes/Cafe';
import Sample from './routes/Sample';
import TakeOut from './routes/TakeOut';
import Game2 from './routes/Game2';
import Intro1 from './routes/intro/Intro1';
import Hamburger_single from './routes/Hamburger_single';
import Movie from './routes/Movie';
import Payment from './routes/Payment';
import OneToFifty from './routes/NumberGame';
import Intro2 from './routes/intro/intro2';
import Intro3 from './routes/intro/intro3';
import Introduce from './routes/introduce';



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  line-height: 1.2;
  background-color: black;
}
a {
  text-decoration:none;
  color:inherit;
}
`;



function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Menu/>}>
          </Route>
          <Route path="/Menu" element={<Menu/>}>
          <Route path="/Menu/intro/:id" element={<Intro1/>}/>
          <Route path="/Menu/home/introduce" element={<Introduce/>}/>
            <Route path="/Menu/explain2" element={<Explain/>}/>
            <Route path="/Menu/explain" element={<Explain2/>}>
            </Route>
            <Route path="/Menu/gamechoice" element={<Game/>}>
            </Route>
              <Route path="/Menu/gamechoice/game" element={<Game2/>}/>
              <Route path="/Menu/gamechoice/numberGame" element={<OneToFifty/>}/>
            <Route path="/Menu/test" element={<Sample/>}/>
            <Route path="/Menu/chart" element={<Hamburger_single/>}/>
              <Route path="/Menu/home" element={<Choice/>}>
              <Route path="/Menu/home/easy" element={<EasyChoice/>}/>
              <Route path="/Menu/home/middle" element={<MiddleChoice/>}/>
              <Route path="/Menu/home/hard" element={<HardChoice/>}>
              <Route path="/Menu/home/hard/:objId" element={<Menu/>}/>
              </Route>
              <Route path="/Menu/home/hard/cafe" element={<Explain2/>}>
              <Route path="/Menu/home/hard/cafe/payment" element={<Payment/>}/>
              </Route>
              <Route path="/Menu/home/hard/cgv" element={<Movie/>}/>
          </Route>
          </Route>
        </Routes>
        </Router>
        </ThemeProvider>
      </RecoilRoot>
      );
}

export default App;
