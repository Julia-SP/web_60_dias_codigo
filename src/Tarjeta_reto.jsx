import './styles_tarjeta_reto.css';

export default function Tarjeta_reto({ numero, imagen, nombre, descripcion, lenguajes = [] }) {
  return (
    <div className="tarjeta">
  <div className="imagen-contenedor">
    <img src={imagen} className="foto-tarjeta" />
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



import PropTypes from 'prop-types';

Tarjeta_reto.propTypes = {
  numero: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  dificultad: PropTypes.number.isRequired,
  lenguajes: PropTypes.arrayOf(PropTypes.string)
};