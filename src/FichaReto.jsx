import '/public/styles_fichaReto.css';
export default function FichaReto(reto) {
    if (!reto) return null;

  const {
    numero,
    nombre,
    descripcion,
    imagen,
    explicacion_ejercicio,
    consejos,
    links = []
  } = reto;
  return (
    <div className="container-ficha">
      <div className="iz-column">
       <img src={imagen} alt={`Imagen del reto ${numero}`} />

  
        <div className="seccion">
          <h3 className="seccion-titulo">Recursos útiles</h3>
          <ul className="lista-recursos">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  ✌️ Recurso {index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
         <div className="seccion">
          <h3 className="seccion-titulo">Superconsejito</h3>
          <p className="seccion-texto">{consejos}</p>
        </div>
      </div>

      <div className="dcha-column">
        <p className="numero">{numero}</p>
        <h2 className="titulo-reto">{nombre}</h2>
        <p className="descripcion-larga">{descripcion}</p>
        <h4 className="explicacion-titulo">¿Qué tienes que hacer?</h4>
        <p className="explicacion-texto">{explicacion_ejercicio}</p>
      </div>
    </div>
  );
}
