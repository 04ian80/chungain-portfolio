import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Main from './pages/Main';
import './styles/css/styles.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
);
export default App;
