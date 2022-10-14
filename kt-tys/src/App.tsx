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
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/Menu" element={<Menu/>}>
          <Route path="/Menu/chart" element={<Chart/>}/>
            <Route path="/Menu/home" element={<Choice/>}>
            <Route path="/Menu/home/easy" element={<EasyChoice/>}/>
            <Route path="/Menu/home/middle" element={<MiddleChoice/>}/>
            <Route path="/Menu/home/hard" element={<HardChoice/>}/>
        </Route>
        </Route>
      </Routes>
      </Router>
      </ThemeProvider>
      );
}

export default App;
