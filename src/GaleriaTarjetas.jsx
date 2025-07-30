import './styles_galeria.css';
import Tarjeta_reto from './Tarjeta_reto';


export default function GaleriaTarjetas({ retos }) {
  return (
    <div className="galeria-retos">
      {retos.map(reto => (
        <Tarjeta_reto
        imagen= {reto.imagen}
          key={reto.id}
          numero={reto.numero}
          nombre={reto.nombre}
          descripcion={reto.descripcion}
          lenguajes={reto.lenguajes}
        />
      ))}
    </div>
  );
}
