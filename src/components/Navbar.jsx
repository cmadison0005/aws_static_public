import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">Astral Enterprises</div>

      <div className="nav-buttons-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/bio" className="nav-button">Bio</Link>        
      </div>

      <div className="social-buttons-container">
        <a href="https://github.com/cmadison0005" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/randall-madison-585637146/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
          <FaLinkedin size={28} />
        </a>
      </div>
      <div className="call-to-action-container">
        <button
          className="call-to-action-button"
          onClick={() => console.log('Buy me a drink clicked!')}
        >
          Buy Me a Drink
        </button>
      </div>
    </div>
  );
};

export default Navbar;
