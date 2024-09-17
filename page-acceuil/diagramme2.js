



const xVallues = [ "Terminer", "Archiver", "En cours", "Bloquer", ];
const yVallues = [55, 49, 44, 24, 15];
const barColor= [

  "green",
  "blue",
  "pink",
  "#e8c3b9",
  
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xVallues,
    datasets: [{
      backgroundColor: barColor,
      data: yVallues
    }]
  },
  options: {
    title: {
      display: true,
      
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});