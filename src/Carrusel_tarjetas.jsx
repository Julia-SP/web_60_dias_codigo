import './styles_Carrusel_tarjetas.css';
import Tarjeta_reto from './Tarjeta_reto';
import data_retos from '../data/data_retos';




export default function Carrusel_tarjetas() {
  return (
    <div className="carrusel-contenedor">
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






/*export default function Carrusel_tarjetas() {
  const [visibleCards, setVisibleCards] = useState(3);

  const aumentarColumnas = () => {
    if (visibleCards < 6) setVisibleCards(visibleCards + 1);
  };

  const disminuirColumnas = () => {
    if (visibleCards > 1) setVisibleCards(visibleCards - 1);
  };

  return (
    <div className="carrusel-wrapper">
      <div className="filtros">
        <button className="filtro">Filtro</button>
        <button className="filtro">Filtro</button>
        <button className="filtro">Filtro</button>
        <button className="filtro">Filtro</button>
        <button className="filtro">Filtro</button>
        <button className="filtro">Filtro</button>
        <button className="filtro borrar">Borrar filtros</button>

        <div className="zoom-controles">
          <button onClick={aumentarColumnas}>＋</button>
          <button onClick={disminuirColumnas}>－</button>
        </div>
      </div>

      <div
        className="grid-carrusel"
        style={{ gridTemplateColumns: `repeat(${visibleCards}, 1fr)` }}
      >
        {data_retos.map(reto => (
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
    </div>
  );
}
*/