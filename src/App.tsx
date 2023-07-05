import Header from './components/common/Header';
import Activity from './pages/Activity';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './styles/css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Introduction />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/activity' element={<Activity />} />
    </Routes>
  </BrowserRouter>
);
export default App;
