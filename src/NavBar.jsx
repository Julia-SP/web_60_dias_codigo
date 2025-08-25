import { useState } from 'react';
import '/public/styles_navBar.css'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className='contenido'>
        <div id="logo">
          <a href="#hero">
            <img src="./LOGO_60_morado.svg" alt="logo" />
          </a>
        </div>
        
        {/* Menú hamburguesa - solo visible en móvil */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú de navegación */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="boton-nav">
            <a href="#container-sec1" onClick={closeMenu}>WTH?</a>
          </li>
          <li className="boton-nav">
            <a href="#container-sec2" onClick={closeMenu}>Retos</a>
          </li>
          <li className="boton-nav">
            <a href="#container-footer" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}