import { Route, Routes } from 'react-router-dom';
import './App.css';

import Bio from './components/Bio';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Links from './components/Links';

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
};

export default App;
