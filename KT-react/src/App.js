import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Explain" element={<Explain />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
