import './styles_navBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className='contenido'>
        <li id="logo">
          <a href="#hero">
            <img src="./public/LOGO_60_morado.svg" alt="logo" />
          </a>
        </li>
        <li className="boton-nav"><a href="#container-sec1">En qué consiste</a></li>
        <li className="boton-nav"><a href="#container-sec2">Retos</a></li>
        <li className="boton-nav"><a href="#container-footer">Contacto</a></li>
      </ul>
    </nav>
  );
}
