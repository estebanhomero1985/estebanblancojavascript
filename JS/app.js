// Palabras disponibles para adivinar
const palabras = ["manzana", "pera", "naranja", "banana", "uva"];

// Array de caracteres de la palabra seleccionada
let palabraSeleccionada = [];

// Array de caracteres de la palabra mostrada al jugador
let palabraMostrada = [];

// Intentos restantes
let intentosRestantes = 6;

// Función para seleccionar una palabra aleatoria del array de palabras
function seleccionarPalabra() {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  palabraSeleccionada = palabras[indiceAleatorio].split('');
  palabraMostrada = Array(palabraSeleccionada.length).fill('_');
}

// Función para verificar si una letra ingresada por el jugador está en la palabra seleccionada
function verificarLetra(letra) {
  let letraEncontrada = false;
  for (let i = 0; i < palabraSeleccionada.length; i++) {
    if (palabraSeleccionada[i] === letra) {
      palabraMostrada[i] = letra;
      letraEncontrada = true;
    }
  }

  if (!letraEncontrada) {
    intentosRestantes--;
  }

  return palabraMostrada.join('') === palabraSeleccionada.join('');
}

// Función para reiniciar el juego
function reiniciarJuego() {
  seleccionarPalabra();
  intentosRestantes = 6;
}

// Iniciar el juego
seleccionarPalabra();

// Variable para almacenar si el juego ha finalizado
let juegoFinalizado = false;

// Loop principal del juego
while (!juegoFinalizado && intentosRestantes > 0) {
  const letraIngresada = prompt(
    `Palabra: ${palabraMostrada.join(' ')}\nIntentos restantes: ${intentosRestantes}\nIngresa una letra:`
  );

  if (letraIngresada === null) {
    break;
  }

  if (letraIngresada.length !== 1 || !/^[a-zA-Z]+$/.test(letraIngresada)) {
    alert("Ingresa una letra válida.");
    continue;
  }

  juegoFinalizado = verificarLetra(letraIngresada.toLowerCase());
}

if (juegoFinalizado) {
  alert("¡Felicitaciones! Has adivinado la palabra.");
  alert(`La palabra era: ${palabraSeleccionada.join('')}`);
} else {
  alert("¡Oh no! Has perdido.");
  alert(`La palabra era: ${palabraSeleccionada.join('')}`);
}
