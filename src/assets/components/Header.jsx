import { useState } from "react" 
import { FaBars, FaTimes } from "react-icons/fa"
import './header.css'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <header className="header">
    <div className="logo"></div>
    <nav className={menuOpen ? 'nav open' : 'nav'}>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
    <div className="hamburger" onClick={toggleMenu}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </div>
  </header>
  )
}

export default Header