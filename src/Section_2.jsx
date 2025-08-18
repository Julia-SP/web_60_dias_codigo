import './styles_Section.css';
import './styles_fichaReto.css';
import Tarjeta_reto from './Tarjeta_reto';
import { useState } from 'react';
import data_retos from '../data/data_retos';

const tope = 60; 

export default function Section_2({ onAbrirReto }) {
  const [filtro, setFiltro] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtros = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Express',
    'API',
    'Chart.js',
    'Firebase',
    'Node.js',
    'JWT',
    'MongoDB',
    'Redux',
    'Socket.io',
  ];

  // Maneja selección de filtro, y reinicia visibleCount a 6 para no mostrar más que el tope filtrado
  const handleFiltro = (nombre) => {
    setFiltro(filtro === nombre ? null : nombre);
    setVisibleCount(6); // Resetea la cantidad visible al cambiar filtro
  };

  // Filtrar retos por lenguaje seleccionado
  const retosFiltrados = filtro
    ? data_retos.filter((reto) => reto.lenguajes.includes(filtro))
    : data_retos;

  const maxToShow = Math.min(tope, retosFiltrados.length);

  const mostrarMas = () => {
    setVisibleCount((prev) => Math.min(prev + 6, maxToShow));
  };

  const mostrarMenos = () => {
    setVisibleCount((prev) => Math.max(prev - 6, 6));
  };

  const mostrarBotonCargarMas = visibleCount < maxToShow;
  const mostrarBotonMenos = visibleCount >= maxToShow && visibleCount > 6;

  return (
    <div id="container-sec2" className="container-sec2">
      <h3>Retos</h3>

      <div className="caja">
        <div className="filtros">
          {filtros.map((f, i) => (
            <button
              key={i}
              onClick={() => handleFiltro(f)}
              className={filtro === f ? 'activo' : ''}
            >
              {f}
            </button>
          ))}
          <button
            onClick={() => {
              setFiltro(null);
              setVisibleCount(6);
            }}
            className="borrar"
          >
            Borrar filtros
          </button>
        </div>

        <div className="galeria-retos">
          {retosFiltrados.slice(0, visibleCount).map((reto) => (
            <Tarjeta_reto
              key={reto.id}
              imagen={reto.imagen}
              numero={reto.numero}
              nombre={reto.nombre}
              descripcion={reto.descripcion_corta}
              lenguajes={reto.lenguajes}
              onClick={() => onAbrirReto(reto)}
            />
          ))}

          {mostrarBotonCargarMas && (
            <button className="ver-mas" onClick={mostrarMas}>
              Cargar más
            </button>
          )}

          {mostrarBotonMenos && (
            <button className="ver-mas" onClick={mostrarMenos}>
              Mostrar menos
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
