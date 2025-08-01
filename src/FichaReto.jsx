import './styles_fichaReto.css';
export default function FichaReto() {
  return (
    <div className="container-ficha">
      <div className="iz-column">
        <div className="image">Imagen</div>

        <div className="seccion">
          <h3 className="seccion-titulo">Recursos útiles</h3>
          <ul className="lista-recursos">
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
          </ul>
        </div>

        <div className="seccion">
          <h3 className="seccion-titulo">Superconsejito</h3>
          <p className="seccion-texto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the s standard.
          </p>
        </div>
      </div>

      <div className="dcha-column">
        <p className="numbero">1</p>
        <h2 className="titlulo-reto">Título del reto</h2>
        <p className="descripcion-larga">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the  standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets.
        </p>
      </div>
    </div>
  );
}
