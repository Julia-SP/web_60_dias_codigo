import React from 'react';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li id="logo"><a href="#hero">{60}</a></li>
        <li><a href="#section_1">El reto</a></li>
        <li><a href="#section_1">Sobre mí</a></li>
        <li><a href="#section_1">Requisitos</a></li>
        <li><a href="#section_1">Ver proyectos</a></li>
        <li><a href="#Footer">Contacto</a></li>
      </ul>
    </div>
  );
}
