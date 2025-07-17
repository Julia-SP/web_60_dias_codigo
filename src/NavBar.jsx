import './styles_navBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className='contenido'>
        <li id="logo"><a href="#hero">  <img src="./public/LOGO_60_morado.svg" alt="logo" ></img></a></li>
        <div className="botones">
        <li><a href="#section_1">El reto</a></li>
        <li><a href="#section_1">Sobre mí</a></li>
        <li><a href="#section_1">Requisitos</a></li>
        <li><a href="#section_1">Ver proyectos</a></li>
        <li><a href="#Footer">Contacto</a></li>
        </div>
      </ul>
    </div>
  );
}
