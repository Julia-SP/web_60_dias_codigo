import Footer from './Footer';
import NavBar from './NavBar';
import Hero from './Hero';
import Section_1 from './Section_1';
import Section_2 from './Section_2';
import FichaReto from './FichaReto';
import { useState } from 'react';
import './styles.css';
export default function App() {
  const [retoSeleccionado, setRetoSeleccionado] = useState(null);
  const handleAbrirModal = (reto) => {
    setRetoSeleccionado(reto);
  };

  const handleCerrarModal = () => {
    setRetoSeleccionado(null);
  };
  return (
    <div>
      <NavBar />
      <Hero />
      <Section_1 />
      <Section_2 onAbrirReto={handleAbrirModal} />

      <Footer />
      {retoSeleccionado && (
        <>
          {console.log('RETO ABIERTO', retoSeleccionado)}
          <div className="modal-overlay" onClick={handleCerrarModal}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <button className="cerrar-modal" onClick={handleCerrarModal}>
                X
              </button>
             <FichaReto
            numero={retoSeleccionado.numero}
            nombre={retoSeleccionado.nombre}
            imagen={retoSeleccionado.imagen}
            explicacion_ejercicio={retoSeleccionado.explicacion_ejercicio}
            consejos={retoSeleccionado.consejos}
            links={retoSeleccionado.links}
          />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
