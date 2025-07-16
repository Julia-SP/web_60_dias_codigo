
#  0. PREVIO

## Instalo vite y react
```js
npm create vite
```
## Limpio carpetas
## Creo git
### 1. Ve a la carpeta del proyecto
cd /ruta/a/tu/carpeta

### 2. Inicializa Git (si no lo has hecho ya)
git init

###  3. Agrega los archivos al control de versiones
git add .

###  4. Haz el primer commit
git commit -m "Primer commit"

###  5. Agrega el repositorio remoto (usa tu propia URL aquí)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

###  6. Sube el contenido (main o master según el caso)
git branch -M main
git push -u origin main


## Creo App.jsx


export default function App() {
  return (
    <div>
      
    </div>
  )
}

## Creo main.jsx
```js
//0. Hemos borrado todo lo que había en la carpeta src
//1. necesario para renderizala app

import React from 'react';
import ReactDOM from 'react-dom/client';

//2. importamos estilos globales
import './styles.css';

//3. Vamos a renderizarlo. El id que seleccionamos está en index.html
//Es un "coge este elemento id y sustituyelo por esto que pongo despues de render"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <App.jsx/>
    </React.StrictMode>
)

```




## Instalo ESLint, Prettier y Babel
Estas son herramientas pata escribir código limpio, seguro y compatible.
gibilidad del código. A continuación, se explica para qué sirve cada una y por qué deberías considerarlas:

### 1. ESLint
- Qué es: Es un analizador de código (“linter”) para JavaScript y TypeScript que revisa tu código en busca de errores, malas prácticas y estilos inconsistentes. Detecta potenciales bugs antes de que se conviertan en problemas en producción.

- Cómo funciona en React: Con plugins adicionales (por ejemplo, eslint-plugin-react), valida específicamente reglas y buenas prácticas de React, como el correcto uso de hooks y JSX, detectando errores comunes de componentes y accesibilidad.

- Qué aporta:
Te avisa si tienes errores de sintaxis o variables no usadas.
Asegura que sigues un mismo estándar de codificación dentro del equipo.
Aumenta la calidad y consistencia del código.

**Instalación**
```bash 
npm install eslint --save-dev

```
Inicializa la Configuración
Después de instalar ESLint, genera el archivo de configuración ejecutando:

```bash 
npx eslint --init

```
Durante el proceso te hará preguntas:

¿Para qué vas a usar ESLint? (elige “para chequear sintaxis y encontrar problemas”)

¿Qué tipo de módulos usas? (elige “JavaScript modules - import/export”, si corresponde)

¿Usas React? (elige que sí)

¿Utilizas TypeScript? (elige según lo que uses)

¿Dónde correrá tu código? (elige “browser”, y opcionalmente “Node”)

¿Qué formato prefieres para el archivo de configuración? (JSON, YAML o JS).

Esto generará el archivo de configuración .eslintrc.json (o .js o .yml), donde quedan guardadas las reglas base.

Instalo la extensión ESlint para VScode

### 2. Prettier
- Qué es: Es un formateador automático de código. Mientras ESLint se centra en errores y estilo, Prettier se encarga únicamente del formato, reescribiendo tu código (espacios, comillas, sangría, etc.) de forma consistente y automática con solo un comando o al guardar un archivo.

- Por qué usarlo: Facilita la colaboración en equipo, reduce discusiones por estilo de código y evita errores visuales. Es especialmente útil con React, donde los archivos .jsx y .tsx pueden crecer y volverse complejos rápidamente.

- Integración: Se integra bien con ESLint (usando plugins dedicados para evitar conflictos de reglas), y muchos equipos configuran ambos para funcionar juntos.

**Instalación**
```bash 
npm install --save-dev --save-exact prettier
```
creamos archivo donde añadir las configuaraciones que queramos. también podemos hacer un .prettierignore con los archivos que no querdamos que analice

```bash 
echo '{}' > .prettierrc

```

Integramos prettier con Eslint para evitar conflictos.

```bash 
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Instalo la extensión Prettier

### 3. Babel
- Qué es: Es un transpilador o compilador de JavaScript. Convierte el código moderno (ES6+, JSX) que escribes en React a versiones más antiguas de JavaScript compatibles con todos los navegadores.

- Por qué es necesario con React: React utiliza JSX, una sintaxis que los navegadores no entienden directamente. Babel traduce JSX a funciones JavaScript estándar y convierte nuevas características del lenguaje a JavaScript tradicional.

- ¿Siempre debes instalarlo? Si usas herramientas como Create React App (CRA), Babel ya está incluido. Solo debes instalarlo manualmente si configuras tu entorno desde cero o necesitas ajustes avanzados.

```bash
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

```
creamos archivo .babelrc

