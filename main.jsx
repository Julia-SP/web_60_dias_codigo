//0. Hemos borrado todo lo que había en la carpeta src
//1. necesario para renderizala app
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/App.jsx'
//2. importamos estilos globales
import './styles.css';

//3. Vamos a renderizarlo. El id que seleccionamos está en index.html
//Es un "coge este elemento id y sustituyelo por esto que pongo despues de render"
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <App/>
    </React.StrictMode>
)