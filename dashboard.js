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
  const options = {
    type: "native", 
    amount: Moralis.Units.ETH(amount), 
    receiver: address
  }
  let result = await Moralis.transfer(options)
}

async function transferERC20(){
  const address = document.getElementById('erc20-address').value;
  const amount = document.getElementById('erc20-amount').value;
  const contract = document.getElementById('erc20-contract').value;
  const decimals = document.getElementById('erc20-decimals').value;

  // sending 0.5 ETH
  const options = {
    type: "erc20", 
    amount: Moralis.Units.Token(amount, decimals), 
    receiver: address,
    contractAddress: contract
  }
  let result = await Moralis.transfer(options)
}

//CHAINLINK RINKEBY ADDRESS
//0x01BE23585060835E02B77ef475b0Cc51aA1e0709
//Decimals: 18

//Executes functions defined above on a click with the id tag hookup
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;

//FUNCTION CLICK LISTENERS
document.getElementById("transfer-native").onclick = transferNative;
document.getElementById("transfer-erc20").onclick = transferERC20;

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
