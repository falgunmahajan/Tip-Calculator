const calculate = document.querySelector(".btn");
const range = document.querySelector("#tip-percentage");
calculate.addEventListener("click", () => {
    tipAmount();
    document.querySelector(".result").style.display = "block"
})
range.addEventListener("change",tipAmount)

function tipAmount() {
    
    const amount = +(document.querySelector("#amount").value);
    const tipPercentage = range.value;
    document.querySelector(".tip").innerHTML = `${tipPercentage}%`;
    
    const tip = amount+(amount * tipPercentage / 100);
    document.querySelector("#Original-amount").value = amount;
    document.querySelector("#Tip-amount").value = tip;
}
