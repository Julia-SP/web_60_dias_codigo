import './styles_Carrusel_tarjetas.css';
import Tarjeta_reto from './Tarjeta_reto';
import data_retos from '../data/data_retos';

export default function Carrusel_tarjetas() {
  return (
    <div className="carrusel-tarjetas">
      {data_retos.map((reto) => (
        <Tarjeta_reto
          key={reto.id}
          numero={reto.numero}
          nombre={reto.nombre}
          descripcion={reto.descripcion}
          lenguajes={reto.lenguajes}
          dificultad={reto.dificultad}
        />
      ))}
    </div>
  );
}

