# Flexbox CSS
## ¿Qué es Flexbox?

Flexbox (modelo de caja flexible) es un sistema de diseño en CSS pensado para distribuir y alinear elementos dentro de un contenedor de forma eficiente, adaptable y sencilla, solucionando muchos problemas clásicos de maquetación web en una sola dimensión (filas o columnas; nunca ambas a la vez). Flexbox sí es una herramienta responsive .

## Conceptos Básicos

- **Contenedor flex**: El elemento padre al que se le aplica `display: flex` o `display: inline-flex`. Sus hijos se convierten en **ítems flex** (elementos flexibles).
- **Eje principal (main axis)**: La dirección principal en la que se distribuyen los ítems (por defecto, horizontal).
- **Eje cruzado (cross axis)**: Perpendicular al eje principal (por defecto, vertical).

## Propiedades principales del contenedor Flex

| Propiedad         | Descripción                                                              | Valores posibles                                   |
|-------------------|--------------------------------------------------------------------------|----------------------------------------------------|
| `display`         | Activa el modelo Flexbox.                                                | `flex`, `inline-flex`                              |
| `flex-direction`  | Define el eje principal y la dirección de los elementos.                 | `row`, `row-reverse`, `column`, `column-reverse`   |
| `flex-wrap`       | Permite que los elementos pasen a otra línea si no caben.                | `nowrap`, `wrap`, `wrap-reverse`                   |
| `flex-flow`       | Combina `flex-direction` y `flex-wrap`.                                  | Ej: `row wrap`                                     |
| `justify-content` | Distribuye espacio y alinea los elementos a lo largo del eje principal.  | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items`     | Alinea los elementos a lo largo del eje cruzado.                         | `stretch`, `flex-start`, `flex-end`, `center`, `baseline`  |
| `align-content`   | Alinea las líneas del contenedor cuando hay varias líneas.               | Igual que `align-items`                            |

## Propiedades principales de los ítems flex

| Propiedad      | Descripción                                         | Valores posibles                      |
|----------------|-----------------------------------------------------|---------------------------------------|
| `order`        | Define el orden de los ítems flex.                  | Número (menor primero, mayor después) |
| `flex-grow`    | Factor de crecimiento de los ítems.                 | Número (`0` por defecto)              |
| `flex-shrink`  | Factor de encogimiento de los ítems.                | Número (`1` por defecto)              |
| `flex-basis`   | Tamaño base del ítem antes de crecer o reducirse.   | Valor (`auto` por defecto)            |
| `flex`         | Shortcut para `flex-grow`, `flex-shrink`, y `basis`. | Ej: `flex: 1 1 100px`                 |
| `align-self`   | Permite modificar la alineación individual del ítem.| Igual que `align-items`               |

## Ejemplo Básico de Código

```css
.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
}

.caja {
  background: lightblue;
  flex: 1 1 100px;
}
```
```html

  1
  2
  3

```

## ¿Cómo funciona Flexbox?

- **Distribuye espacio sobrante** entre elementos o los encoge si hay más elementos de los que caben[1][3][4].
- **Alinea y justifica**: Puedes alinear todos los elementos en un eje o distribuir espacio automáticamente.
- **Ordena visualmente**: Cambia el orden de visualización de los elementos sin alterar el HTML con `order`.
- **Responde fácilmente**: Los elementos pueden adaptarse al tamaño de la pantalla o su contenedor de forma fluida y predecible[2][4].

## Ejemplo de uso práctico

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo { flex: 2; }
.menu { flex: 4; }
.user { flex: 1; }
```
Con este código, puedes tener una barra de navegación donde el logo, el menú y el usuario ocupen diferentes proporciones del espacio disponible gracias a las reglas de flexbox.

## Ventajas clave de Flexbox

- Diseño más limpio y menos dependiente de "floats" o "positions".
- Fácil de centrar elementos (tanto horizontal como verticalmente).
- Ahorra mucho código y optimiza el mantenimiento del diseño.
- Es ideal para layouts de un solo eje (una fila o una columna).

Flexbox es un módulo indispensable para el diseño CSS moderno y facilita tareas de alineación, distribución y ordenación que eran mucho más complejas con técnicas clásicas.

# Sistemas de medidas
## Sistemas de medida en CSS

En CSS, los sistemas de medida establecen cómo se expresa el tamaño de los elementos y espacios dentro de una página web. Se dividen en dos grandes categorías: **unidades absolutas** y **unidades relativas**.

### 1. Unidades absolutas

Representan medidas fijas que no cambian según el contexto o el dispositivo. Son ideales cuando se requiere precisión, pero *no son recomendadas para sitios responsivos*, ya que no se adaptan a diferentes pantallas.

| Unidad | Descripción             | Equivalencia                       | Ejemplo                |
|--------|-------------------------|-------------------------------------|------------------------|
| px     | Píxeles                 | 1 px = 1/96 de 1 in                 | width: 200px;          |
| cm     | Centímetros             | 1cm ≈ 37.8px                        | font-size: 2cm;        |
| mm     | Milímetros              | 1mm = 1/10 de 1cm                   | font-size: 10mm;       |
| in     | Pulgadas                | 1in = 2.54cm = 96px                 | width: 3in;            |
| pt     | Puntos                  | 1pt = 1/72 de 1in                   | font-size: 20pt;       |
| pc     | Picas                   | 1pc = 12pt                          | width: 6pc;            |
| Q      | Cuarto de milímetro     | 1Q = 1/40 de 1cm                    | font-size: 40Q;        |

**Ventajas:**  
- Precisión exacta, útil para impresión o cuando se conoce el tamaño del medio.
- Consistencia visual cuando el entorno no varía.

**Desventajas:**  
- Poco flexible ante distintos dispositivos y tamaños de pantalla
- Puede dificultar la accesibilidad

### 2. Unidades relativas

Dependen de otros valores (como el tamaño del contenedor, el viewport, o la fuente base), haciéndolas **ideales para diseños responsivos** y adaptativos.

| Unidad  | Relación con            | Ejemplo de uso          | Descripción                                                    |
|---------|------------------------|-------------------------|----------------------------------------------------------------|
| %       | Elemento padre         | width: 80%;             | Porcentaje respecto al valor base del elemento contenedor       |
| em      | Fuente del elemento    | font-size: 1.5em;       | Multiplica el tamaño de fuente del elemento                    |
| rem     | Fuente raíz (html)     | font-size: 2rem;        | Multiplica el tamaño de fuente del elemento raíz               |
| vw      | 1% del ancho viewport  | width: 50vw;            | 50% del ancho de la ventana                                    |
| vh      | 1% del alto viewport   | height: 50vh;           | 50% del alto de la ventana                                     |
| vmin    | 1% del menor viewport  | font-size: 5vmin;       | 5% del valor más pequeño entre ancho y alto del viewport       |
| vmax    | 1% del mayor viewport  | font-size: 5vmax;       | 5% del valor más grande entre ancho y alto del viewport        |
| ch      | Ancho del carácter "0" | width: 40ch;            | Ideal para definir longitudes en base al texto                  |
| ex      | Altura x de la fuente  | font-size: 2ex;         | Relativo a la altura x de la fuente                            |
| lh      | Altura línea actual    | font-size: 2lh;         | Basado en el line-height del elemento                          |

**Ventajas:**
- Responsivo: Se adaptan según dispositivo, ventana y preferencias de usuario.
- Mejora la accesibilidad, permitiendo escalar texto y layouts.
- Flexibilidad para fluididad y adaptabilidad en el diseño.

**Desventajas:**
- Dependen del contexto, lo que puede dificultar el control preciso en todos los casos.
- Requiere atención para evitar resultados inesperados en jerarquías complejas.

### Ejemplos prácticos

#### 1. Uso de unidades absolutas
```css
.caja {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}
```

#### 2. Uso de unidades relativas para un diseño adaptable
```css
.container {
  width: 80vw;      /* 80% del ancho del viewport */
  font-size: 2rem;  /* 2 veces el tamaño de la fuente raíz */
}
.titulo {
  font-size: 3em;   /* 3 veces el tamaño de la fuente del elemento padre */
}
```

#### 3. Ejemplo responsivo con % y vw/vh
```css
.imagen {
  width: 100%;      /* Ocupa todo el ancho del elemento padre */
  max-width: 80vw;  /* Máximo: 80% del ancho de la ventana */
}
```

### Cuándo y por qué elegir cada sistema

- **Absolutas:** Para precisión en impresión o elementos que no cambian.
- **Relativas:** Para diseños modernos, responsivos y accesibles, adaptándose a pantallas y preferencias variadas.

Elegir el sistema adecuado ayuda a lograr un diseño web balanceado entre control visual y adaptabilidad.

# CSS grid
## ¿Qué es CSS Grid?

**CSS Grid** es un sistema de diseño bidimensional que permite crear layouts complejos y responsivos organizando elementos en filas y columnas. Supera las limitaciones de modelos previos al facilitar la distribución, alineación y manipulación de varios elementos tanto en el eje horizontal como en el vertical.

## Conceptos Básicos

- **Contenedor Grid:** Elemento al que se le aplica `display: grid;` o `display: inline-grid;`
- **Ítems Grid:** Hijos directos del contenedor, ubicados en las celdas de la cuadrícula.
- **Filas y Columnas:** Definidas explícitamente por el desarrollador o generadas automáticamente.
- **Líneas y Áreas:** Se pueden nombrar zonas específicas del grid mediante nombres.

## Propiedades principales del contenedor Grid

| Propiedad                | Descripción                                           | Ejemplo                                |
|--------------------------|------------------------------------------------------|----------------------------------------|
| `display`                | Activa el modelo grid.                               | `display: grid;`                       |
| `grid-template-columns`  | Define el número y tamaño de las columnas.           | `200px 1fr 2fr`                        |
| `grid-template-rows`     | Define el número y tamaño de las filas.              | `100px auto 1fr`                       |
| `grid-gap`/`gap`         | Espacio entre filas y columnas.                      | `gap: 20px;`                           |
| `grid-template-areas`    | Asigna nombres a áreas del grid.                     | Ver ejemplo abajo                      |
| `justify-items`          | Alinea los ítems en el eje horizontal dentro de cada celda. | `justify-items: center;`         |
| `align-items`            | Alinea los ítems en el eje vertical dentro de cada celda.   | `align-items: stretch;`           |
| `justify-content`        | Alinea la cuadrícula dentro de su contenedor.        | `justify-content: space-between;`      |
| `align-content`          | Alinea la cuadrícula verticalmente en su contenedor. | `align-content: center;`               |

## Propiedades principales de los ítems Grid

| Propiedad         | Descripción                                            | Ejemplo                           |
|-------------------|-------------------------------------------------------|-----------------------------------|
| `grid-column`     | Determina en qué columna comienza/termina un ítem.    | `grid-column: 1 / 3;`             |
| `grid-row`        | Determina en qué fila comienza/termina un ítem.       | `grid-row: 2 / 4;`                |
| `grid-area`       | Vincula un ítem a un área definida en el contenedor.  | `grid-area: header;`              |
| `justify-self`    | Alinea un ítem horizontalmente en su celda.           | `justify-self: end;`              |
| `align-self`      | Alinea un ítem verticalmente en su celda.             | `align-self: center;`             |

## Ejemplo Básico de Código

**Definir un grid con tres columnas de diferentes tamaños:**

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto;
  gap: 16px;
}
.celda {
  background: lightcoral;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
}
```
```html

  A
  B
  C
  D

```

## Ejemplo con áreas nombradas

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 10px;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```
```html

  Encabezado
  Barra lateral
  Contenido principal
  Pie de página

```

## Ejemplo responsive con repeat(), minmax() y auto-fit

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.item {
  background: deepskyblue;
  height: 160px;
}
```

Esto adapta la cantidad de columnas y el ancho automáticamente según el espacio disponible, ideal para tarjetas y galerías adaptables.

## ¿Cómo funciona Grid?

- **Define filas y columnas:** Puedes organizar los elementos en las celdas que prefieras.
- **Layouts bidimensionales:** Puedes controlar posición y tamaño tanto en horizontal como vertical.
- **Alineación y espaciado:** Grids permiten centrar, alinear y distribuir espacios entre elementos y áreas.
- **Áreas nombradas:** Facilitan el mapeo visual del layout, haciendo el CSS más legible.

## Ventajas clave de CSS Grid

- Permite crear **layouts complejos** de forma sencilla y legible.
- Fácil de combinar con otros sistemas (Flexbox, media queries).
- **Básicamente responsivo** por naturaleza, adaptando elementos automáticamente al espacio disponible.
- Mejora rapidez y claridad del código.

CSS Grid es la herramienta más poderosa y moderna para construir interfaces web responsivas, ordenadas y mantenibles. Si dominas Grid, podrás crear layouts flexibles, robustos y elegantes con muy poco código.