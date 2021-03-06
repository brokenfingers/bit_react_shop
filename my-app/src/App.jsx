
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Back from './Components/back/Back';
import Front from './Components/front/Front';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Front />}></Route>
      <Route path="/admin" element={<Back />}></Route>

      </Routes>
  </BrowserRouter>
  );
}

export default App;
