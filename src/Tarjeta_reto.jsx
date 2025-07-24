import './styles_tarjeta_reto.css';

//falta añadir la dificultad
export default function Tarjeta_reto({ numero, nombre, descripcion, lenguajes = [], dificultad }) {
  return (
    <div className="tarjeta">
      <div className="cuadrado"></div>
      <h6>{numero}</h6>
      <h5>{nombre}</h5>
      <p>{dificultad}</p>
      <p>{descripcion}</p>
      <div className="iconos-lenguajes">
        <ul>
          {lenguajes.map((lenguaje, i) => (
            <li key={i}>{lenguaje}</li>
          ))}
        </ul>
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