import './styles_Carrusel_tarjetas.css';
import Tarjeta_reto from './Tarjeta_reto';
import data_retos from '../data/data_retos';


export default function Carrusel_tarjetas() {
  return (
    <div  id='carrusel' className="carrusel-contenedor">
      <div className="carrusel-slider">
 <ul className="items-carrusel">
          {data_retos.map(reto => (
            <li key={reto.id}>
              <Tarjeta_reto
                numero={reto.numero}
                nombre={reto.nombre}
                descripcion={reto.descripcion}
                lenguajes={reto.lenguajes}
                dificultad={reto.dificultad}
              />
            </li>
          ))}
        </ul>
      </div>
      <button className="carrusel-boton">Siguiente</button>
    </div>
  );
}
