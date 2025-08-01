import './styles_tarjeta_reto.css';
import './styles_tarjeta_reto.css';
import PropTypes from 'prop-types';

export default function Tarjeta_reto({ numero, imagen, nombre, descripcion, lenguajes = [], onClick }) {
  return (
   <div className="tarjeta" onClick={onClick}>

      <div className="imagen-contenedor">
        <img src={imagen} className="foto-tarjeta" alt={`Imagen ${numero}`} />
      </div>
      <div className="contenido-tarjeta">
        <h6>{numero}</h6>
        <h5>{nombre}</h5>
        <p>{descripcion}</p>
        <div className="iconos-lenguajes">
          <ul>
            {lenguajes.map((lenguaje, i) => (
              <li key={i}>{lenguaje}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Tarjeta_reto.propTypes = {
  numero: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  lenguajes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
};
