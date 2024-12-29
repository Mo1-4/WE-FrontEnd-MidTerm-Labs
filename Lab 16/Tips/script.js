let tipCalc = document.getElementById("tipCalc");

tipCalc.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    bill = parseFloat(bill);
    if(isNaN(bill)){
        document.getElementById("notice").style.display = "block";
        document.getElementById("notice").innerHTML = "Please enter a valid number";
        document.getElementById("tipAmount").innerHTML = "$0.00";
    } else{
        let tip = document.getElementById("tip").value;
        let tipEquation = bill * tip / 100;
        let total = bill - tipEquation;
        document.getElementById("notice").style.display = "none";
        document.getElementById("tipAmount").innerHTML = `$${total.toFixed(2)}`;
    }
})