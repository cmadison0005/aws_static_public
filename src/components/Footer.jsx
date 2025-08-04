import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-center gap-8 p-4">
            <a href="https://github.com/cmadison0005" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/randall-madison-585637146/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FaLinkedin size={28} />
            </a>
        </footer>
    )
}

export default Footer;