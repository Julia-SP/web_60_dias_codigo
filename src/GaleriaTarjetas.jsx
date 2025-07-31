import './styles_galeria.css';
import Tarjeta_reto from './Tarjeta_reto';
import { useState } from 'react';



const tope = 60; // O el número que tú prefieras; puedes usar retos.length para todo

export default function GaleriaTarjetas({ retos }) {
  const maxToShow = Math.min(tope, retos.length);
  const [visibleCount, setVisibleCount] = useState(6);

  const mostrarMas = () => {
    setVisibleCount(prev =>
      Math.min(prev + 6, maxToShow)
    );
  };

  const mostrarMenos = () => {
    setVisibleCount(prev =>
      Math.max(prev - 6, 6)
    );
  };

  const mostrarBotonCargarMas = visibleCount < maxToShow;
  const mostrarBotonMenos = visibleCount >= maxToShow && visibleCount > 6;

  return (
    <div>
      <div className="galeria-retos">
        {retos.slice(0, visibleCount).map((reto) => (
          <Tarjeta_reto
            imagen={reto.imagen}
            key={reto.id}
            numero={reto.numero}
            nombre={reto.nombre}
            descripcion={reto.descripcion}
            lenguajes={reto.lenguajes}
          />
        ))}
      </div>
      
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
  );
}
