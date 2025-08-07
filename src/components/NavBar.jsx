import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaDocker } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">Astral Enterprises</div>

      <div className="nav-buttons-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/bio" className="nav-button">Bio</Link>
        <Link to="/links" className="nav-button">Links</Link>
      </div>

      <div className="social-buttons-container">
        <div className="social-button">
          <a href="https://github.com/cmadison0005" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </div>
        <div className="social-button">
          <a href="https://www.linkedin.com/in/randall-madison-585637146/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={28} />
          </a>
        </div>
        <div className="social-button">
          <a href="https://hub.docker.com/repositories/cmadison0005" target="_blank" rel="noopener noreferrer">
            <FaDocker size={28} />
          </a>
        </div>
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

export default NavBar;
