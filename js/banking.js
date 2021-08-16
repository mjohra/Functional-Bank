function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //clear input field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, depositAmount) {
  //get current deposit
  const depositTotal = document.getElementById(totalFieldId);
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount;
}
function currentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const previousBalanceTotal = currentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

//WITHDRAW
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    //update withdraw total
    const getCurrentBalance = currentBalance();
    if (withdrawAmount > 0 && withdrawAmount < getCurrentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > getCurrentBalance)
    {
        console.log("error");
    }
  });
