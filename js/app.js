// Variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener("click", agregarCurso);

  // Cuando se elimina un curso del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
  e.preventDefault();
  // Delegation para agregar-carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(curso);
  }
}

// objeto constructor Curso// DESAFIO CODER
function cursosnuevos(nombre, duracion, fecha) {
  this.nombre = nombre;
  this.duracion = duracion;
  this.fecha = fecha;

  this.datoscurso = function () {
    console.log("el nombre del curso es: " + this.nombre);
    console.log("la duracion del curso es de " + this.duracion);
    console.log("la fecha estimada del curso es el " + this.fecha);
  };
}

alert("ingrese datos del curso nuevo que desea que se incluya");

let nombreCurso = prompt("ingrese nombre del curso nuevo");
let duracionCurso = prompt("ingrese duracion estimada del curso");
let fechaCurso = prompt("ingrese fecha estimada");

let cursonuevo = new cursosnuevos(nombreCurso, duracionCurso, fechaCurso);

cursonuevo.datoscurso();

//ARRAY DE CURSOS/ DESAFIO CODER

let nuevosCursosVerano = [];
let nombreCursoVerano;
let duracionCursoVerano;
let fechaCursoVerano;

for (let i = 0; i < 3; i++) {
  nombreCursoVerano = prompt("ingrese nombre del curso de verano");
  nuevosCursosVerano.push(nombreCursoVerano);

  duracionCursoVerano = prompt("ingrese nombre del curso de verano");
  nuevosCursosVerano.push(duracionCursoVerano);

  fechaCursoVerano = prompt("ingrese fecha del curso de verano");
  nuevosCursosVerano.push(fechaCursoVerano);
}

console.log(nuevosCursosVerano);

//ARRAY DE OBJETOS/ DESAFIO CODER


let listaCursoDiciembre = [];

for (let i = 0; i < 3; i++) {
  let nombreCursoDiciembre = prompt("ingrese nombre del curso de diciembre");

  listaCursoDiciembre.push(new cursoDiciembre(nombreCursoDiciembre));
}

listaCursoDiciembre.sort((a, b) => {
  if (a.nombreCursoDiciembre < b.nombreCursoDiciembre) {
    return -1;
  }

  if (a.nombreCursoDiciembre > b.nombreCursoDiciembre) {
    return 1;
  }

  return 0;
});

console.log(listaCursoDiciembre);


// Lee los datos del curso / Funcion + Objeto
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  if (articulosCarrito.some((curso) => curso.id === infoCurso.id)) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  // console.log(articulosCarrito)
  carritoHTML();
}

//array de cursos
