let golesMessi = 806; 

function adivinarGoles() {
  let golesAdivinados = parseInt(prompt("Adivina cuántos goles tiene Messi:"));

  if (golesAdivinados === golesMessi) {
    alert("¡Correcto! Messi the GOAT ha marcado " + golesMessi + " goles.");
  } else if (golesAdivinados < golesMessi) {
    alert("MAS MAS ...ES MESSI. Inténtalo nuevamente.");
    adivinarGoles(); 
  } else {
    alert("Te pasaste todavia no llego a ese. Inténtalo nuevamente.");
    adivinarGoles(); 
  }
}

adivinarGoles();
