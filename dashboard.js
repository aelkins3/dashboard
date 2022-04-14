//MORALIS CODE
// (async function() {
//   const serverUrl = "https://bfj7efbtjvtt.usemoralis.com:2053/server";
//   const applicationId = "b3ejOczyFpDIqZ5KLOwkRq1koDEeggNh5BE7NT0W";
//   await Moralis.start({serverUrl,applicationId});
// })()

const serverUrl = "https://bfj7efbtjvtt.usemoralis.com:2053/server";
const appId = "b3ejOczyFpDIqZ5KLOwkRq1koDEeggNh5BE7NT0W";
Moralis.start({ serverUrl, appId});

async function login() {
  await Moralis.authenticate();
}

async function logout() {
  await Moralis.User.logOut();
}

async function transferNative(){
  const address = document.getElementById('native-address').value;
  const amount = document.getElementById('native-amount').value;

  // sending 0.5 ETH
  const option = {
    type: "native", 
    amount: Moralis.Units.ETH(amount), 
    receiver: address}
  let result = await Moralis.transfer(options)
}

//Executes functions defined above on a click with the id tag hookup
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;
document.getElementById("transfer-native").onclick = transferNative;

//OLD BOOTSTRAP CODE
(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
