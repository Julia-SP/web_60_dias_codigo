import '/public/styles_navBar.css'

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#hero" id="logo">
        <img src="./LOGO_60_morado.svg" alt="logo" />
      </a>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <ul className={`contenido ${open ? "open" : ""}`}>
        <li className="boton-nav"><a href="#container-sec1">WTH?</a></li>
        <li className="boton-nav"><a href="#container-sec2">Retos</a></li>
        <li className="boton-nav"><a href="#container-footer">Contacto</a></li>
      </ul>
    </nav>
  );
}
