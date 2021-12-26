import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;