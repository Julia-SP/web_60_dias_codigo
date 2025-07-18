import './styles_Carrusel_tarjetas.css';
import Tarjeta_reto from './tarjeta_reto';
export default function Carrusel_tarjetas() {
  return (
    <div className="carrusel-contenedor">
      <div className="carrusel-slider">
        <ul className="items-carrusel">
          <li>
            <Tarjeta_reto />
          </li>
            <li>
            <Tarjeta_reto />
          </li>
            <li>
            <Tarjeta_reto />
          </li>
            <li>
            <Tarjeta_reto />
          </li>
              <li>
            <Tarjeta_reto />
          </li>
              <li>
            <Tarjeta_reto />
          </li>
          
        </ul>
      </div>
      <button className="carrusel-boton">Siguiente</button>
    </div>
  );
}
