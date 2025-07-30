import GaleriaTarjetas from './GaleriaTarjetas';

import './styles_Section.css';
import { useState } from 'react';
import data_retos from '../data/data_retos';

export default function Section_2() {
  const [filtro, setFiltro] = useState(null);

  const filtros = ['HTML', 'CSS', 'JavaScript', 'React', 'Express','API', 'Chart.js', 'Firebase', 'Node.js', 'JWT', 'MongoDB', 'Redux', 'Socket.io'];

  const handleFiltro = (nombre) => {
    setFiltro(filtro === nombre ? null : nombre);
  };

  const retosFiltrados = filtro
    ? data_retos.filter(reto => reto.lenguajes.includes(filtro))
    : data_retos;

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
          <button onClick={() => setFiltro(null)} className="borrar">Borrar filtros</button>
        </div>
        <div className="galeria">
          <GaleriaTarjetas retos={retosFiltrados} />
        </div>
      </div>
    </div>
  );
}
