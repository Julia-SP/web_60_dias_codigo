
import './styles_hero.css'

export default function Hero() {
  return (
    <div className='container-hero' id='hero'>
      <h1>Reto 60 días <br>
      </br>de código</h1>
      <button id='ver-proyectos' href="#container-sec2">Ver proyectos<a href="#container-sec2"></a></button>
      <h4>Practica y aprende JavaScript, HTML, CSS, React, APIs y mucho más a través de proyectos</h4>

      <div className="logos">
        <ul>
            <li> <img src="./public/logos_tools/api.svg" alt="logo" ></img></li>
            <li> <img src="./public/logos_tools/css.svg" alt="logo" ></img></li>
              <li> <img src="./public/logos_tools/html.svg" alt="logo" ></img></li>
                <li> <img src="./public/logos_tools/js.svg" alt="logo" ></img></li>
                  <li> <img src="./public/logos_tools/node.svg" alt="logo" ></img></li>
                    <li> <img src="./public/logos_tools/react.svg" alt="logo" ></img></li>
           
        </ul>
      </div>
    </div>
  )
}
