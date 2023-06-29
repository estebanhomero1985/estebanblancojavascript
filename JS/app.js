// Palabras disponibles para adivinarla
const palabras = ["manzana", "pera", "naranja", "banana", "uva"];

// Palabra aleatoria seleccionada para adivinar
let palabraSeleccionada = "";

// Palabra mostrada al jugador con guiones bajos
let palabraMostrada = "";

// Intentos restantes
let intentosRestantes = 6;

// Función para seleccionar una palabra aleatoria del array de palabras
function seleccionarPalabra() {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  palabraSeleccionada = palabras[indiceAleatorio];
  palabraMostrada = "_".repeat(palabraSeleccionada.length);
}

// Función para verificar si una letra ingresada por el jugador está en la palabra seleccionada
function verificarLetra(letra) {
  if (palabraSeleccionada.includes(letra)) {
    for (let i = 0; i < palabraSeleccionada.length; i++) {
      if (palabraSeleccionada[i] === letra) {
        const nuevaPalabraMostrada =
          palabraMostrada.substring(0, i) +
          letra +
          palabraMostrada.substring(i + 1);
        palabraMostrada = nuevaPalabraMostrada;
      }
    }

    if (!palabraMostrada.includes("_")) {
      alert("¡Felicitaciones! Has adivinado la palabra.");
      alert(`La palabra era: ${palabraSeleccionada}`);
      return true;
    }
  } else {
    intentosRestantes--;
    alert(`Letra incorrecta. Te quedan ${intentosRestantes} intentos.`);

    if (intentosRestantes === 0) {
      alert("¡Oh no! Has perdido.");
      alert(`La palabra era: ${palabraSeleccionada}`);
      return true;
    }
  }

  return false;
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
while (!juegoFinalizado) {
  const letraIngresada = prompt(
    `Palabra: ${palabraMostrada}\nIntentos restantes: ${intentosRestantes}\nIngresa una letra:`
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


