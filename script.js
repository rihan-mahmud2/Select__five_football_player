let number = 0;
const tableBody = document.getElementById("table-body");
const tableChild = tableBody.children;
const totalField = document.getElementById("total");

function Price(inputName) {
  const playerPriceField = document.getElementById(inputName);
  const playerPriceStr = playerPriceField.value;
  const playerPrice = parseFloat(playerPriceStr);
  playerPriceField.value = "";
  return playerPrice;
}
function FieldPrice(inputName) {
  const playerPriceField = document.getElementById(inputName);
  const playerPriceStr = playerPriceField.innerText;
  const playerPrice = parseFloat(playerPriceStr);
  playerPriceField.value = "";
  return playerPrice;
}

// manager price function added
// function managerPrice(inputName) {
//   const managerPriceField = document.getElementById(inputName);
//   const managerPriceStr = managerPriceField.value;
//   const managerPrice = parseFloat(managerPriceStr);
//   return managerPrice;
// }

// coach price function

function displaySelectedPlayer(element) {
  const name = element.parentNode.children[0].innerText;
  const btnDisabled = document.querySelector(".btn-disable");

  if (tableChild.length >= 5) {
    alert("You can not buy more than five Players!!!!!!!!!!!!");
    return;
  }
  element.classList.add("disabled");
  const tr = document.createElement("tr");
  tr.innerHTML = ` 
    <td>${++number}</td>
    <td>${name}</td>
    
    `;
  tableBody.appendChild(tr);
}

// Number checking function

// calculate button clicked function

function calculate() {
  const playerExpenseField = document.getElementById("player-expense");
  const playerCost = Price("player-price");
  const totalPlayerCost = playerCost * tableChild.length;
  if (isNaN(playerCost)) {
    alert("Please Provide Your Number");
    return;
  }
  playerExpenseField.innerText = totalPlayerCost;
  return totalPlayerCost;
}

// player price function

document.getElementById("calculate").addEventListener("click", calculate);

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalPlayerCost = FieldPrice("player-expense");
  const managerPrice = Price("manager-price");
  const coachPrice = Price("coach-price");

  if (isNaN(managerPrice) || isNaN(coachPrice)) {
    alert("Please Provide Number");
    return;
  }

  const netBalacne = managerPrice + coachPrice + totalPlayerCost;
  totalField.innerText = netBalacne;
});
