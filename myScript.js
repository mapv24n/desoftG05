var vectorCandidatos = new Array(2);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;

function voto(candidato) {
  vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1;
  alert("Gracias por su voto!");
}

function estadistica() {
  let total = vectorCandidatos[0] + vectorCandidatos[1];
  let porCan1 = (vectorCandidatos[0] / total) * 100;
  let porCan2 = (vectorCandidatos[1] / total) * 100;
  
  var zBody = document.querySelectorAll("body");
  var zParrafos = document.querySelectorAll("p");
  if(zParrafos[1]){
    alert("Entra");
    zBody.removeChild(zParrafos[1]);
  }

  let nodoParrafo = document.createElement('p');
  let nodoParrafo2 = document.createElement('p');
  
  let texto = document.createTextNode("Votos Candidato 1: " + vectorCandidatos[0] + " - Porcentaje: " + porCan1 + "%");
  let texto2 = document.createTextNode("Votos Candidato 2: " + vectorCandidatos[1] + " - Porcentaje: " + porCan2 + "%");

  nodoParrafo.appendChild(texto);
  nodoParrafo2.appendChild(texto2);

  let elementoDiv = document.getElementById('verEst');
  elementoDiv.appendChild(nodoParrafo);
  elementoDiv.appendChild(nodoParrafo2);

  // Obtener una referencia al elemento canvas del DOM
  const $grafica = document.querySelector("#grafica");
  // Las etiquetas son las que van en el eje X. 
  const etiquetas = ["Candidato1", "Candidato2"]
  // Podemos tener varios conjuntos de datos. Comencemos con uno
  const datosVotos = {
    label: "Votos obtenidos",
    data: [vectorCandidatos[0], vectorCandidatos[1]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
  };
  new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
      labels: etiquetas,
      datasets: [
        datosVotos,
        // Aquí más datos...
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      },
    }
  });

}