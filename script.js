const billAmount = document.getElementById("bill_display_input");
const percentBtn = document.querySelectorAll(".percent_btn");
const customTip = document.getElementById("custom_tip_input");

const warningPnum = document.getElementById("warning");

const personQ = document.getElementById("person_num");

const tipAmountPerson = document.getElementById("tip_amount_per_person");
const totalTipAmountPerson = document.getElementById("total_per_person");

const resetBtn = document.getElementById("reset");

let inputBill = 0;
let percentValue = 0;
let numOfPerson = 0;

billAmount.addEventListener("input", BillAmount);

percentBtn.forEach(percent_btn => {
    percent_btn.addEventListener("click", calPercent);
});

customTip.addEventListener("input", addToPercentVal);
personQ.addEventListener("input", people);

resetBtn.addEventListener("click", clear);








// functions initialization
function BillAmount() {
    inputBill = parseFloat(billAmount.value);
    console.log(inputBill);

    displayResult();

}

function calPercent(event) {
    var decimal = parseFloat(event.target.textContent) / 100;
    percentValue = decimal * inputBill;
    console.log(percentValue.toFixed(2));

    percentBtn.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    
    displayResult();
}


function addToPercentVal(event) {
    percentValue = parseFloat(event.target.value);
    console.log(percentValue);
    displayResult();
}

function people(event) {
    numOfPerson = parseInt(event.target.value);
    console.log(numOfPerson);

    displayResult();
}


function displayResult() {
    if (numOfPerson > 0 && inputBill > 0) {
        tipAmountPerson.textContent = (percentValue / numOfPerson).toFixed(2);
        totalTipAmountPerson.textContent = ((inputBill + percentValue) / numOfPerson).toFixed(2);
    }
    else{
         tipAmountPerson.textContent = "0.00";
        totalTipAmountPerson.textContent = "0.00";
    }
        
    
    if (numOfPerson > 0 || inputBill > 0 || numOfPerson > 0 || inputBill > 0 || percentValue > 0) {
        resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    else{
        tipAmountPerson.textContent = "$0.00";
        totalTipAmountPerson.textContent = "$0.00";
        resetBtn.style.backgroundColor = "hsl(183, 100%, 20%)";

    }
}


function clear(event) {
   
    inputBill = 0;
    percentValue = 0;
    numOfPerson = 0;

    billAmount.value = "";
    personQ.value = "";
    customTip.value = "";
    tipAmountPerson.textContent = "$0.00";
    totalTipAmountPerson.textContent = "$0.00";
}