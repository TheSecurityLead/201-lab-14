'use strict';

function renderChart() {
  let appState = new AppState();
  appState.loadItems(); 

  let labels = appState.allProducts.map(product => product.name);
  let dataClicked = appState.allProducts.map(product => product.timesClicked);

  let data = {
    labels: labels,
    datasets: [{
      label: 'Number of Votes',
      data: dataClicked,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  let config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(canvasElem, config);
}

let canvasElem = document.getElementById('chart');
renderChart();
