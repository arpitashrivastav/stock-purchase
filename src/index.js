import "./styles.css";
var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#stocks-bought");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output_box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var initial = Number(initialPrice.value);
  var number = Number(numberOfStocks.value);
  var current = Number(currentPrice.value);

  calculateProfitAndLoss(initial, number, current);
}

function calculateProfitAndLoss(initial, number, current) {
  if (initial > current) {
    var loss = (initial - current) * number;
    var lossPercentage = (loss / initial) * 100;
    output.innerText = `hey the loss is ${loss} and the percent is ${lossPercentage}%`;
    console.log(
      `hey the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * number;
    var profitPercentage = (profit / initial) * 100;
    output.innerText = `hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`;

    console.log(
      `hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`
    );

    //
  } else {
    output.innerText = "hey no pain no gain";

    console.log("hey no pain no gain");
  }
}
// calculateProfitAndLoss(100, 10, 10);
// calculateProfitAndLoss(10, 10, 100);
// calculateProfitAndLoss(3, 3, 3);
