import { Route, Routes } from 'react-router-dom';
import './App.css';

import Bio from './components/Bio';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/NavBar';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
