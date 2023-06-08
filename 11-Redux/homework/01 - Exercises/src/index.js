const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  let counter = store.getState().contador
  valor.innerHTML = counter
}

// Ejecutamos la función 'renderContador':
renderContador()
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
let btincremento = document.getElementById("incremento")
let btdecremento = document.getElementById("decremento")
let impar = document.getElementById("incrementoImpar")
let incrementoAsync = document.getElementById("incrementoAsync")

btincremento.addEventListener('click', ()=>{store.dispatch(incremento())})
btdecremento.addEventListener('click', ()=>{store.dispatch(decremento())})
impar.addEventListener('click', ()=>{
  store.getState().contador % 2 !== 0 && store.dispatch(incremento())
})
incrementoAsync.addEventListener('click', ()=>{
  setTimeout(() => {
   store.dispatch(incremento()) 
  }, 2000);
})