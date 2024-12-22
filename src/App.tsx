import Header from './components/layout/Header';
import Main from './pages/Main';
import './styles/css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
);
export default App;
