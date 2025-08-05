import { Route, Routes } from 'react-router-dom';
import './App.css';

import Bio from './components/Bio';
import Home from './components/Home';
import Navbar from './components/NavBar';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />        
      </Routes>
    </>
  );
};

export default App;
