function showMessage() {

    let amountInput = document.getElementById('amount').value;
    let amount = parseFloat(amountInput);
    let result;
    let fromC = document.getElementById('fromCurrency').value;
    let toC = document.getElementById('toCurrency').value;
    if (fromC == "USD" && toC == "VND") {
        result = amount * 23000;
    }
    if (fromC == "VND" && toC == "USD")
    {
        result=amount/23000;
    }
    if (fromC==toC){
        result=amount;
    }

    document.getElementById('result').innerHTML='Result= '+result;

    console.log("So tien da nhap: " +amount);
    console.log("from: " +fromC);
    console.log("to : " +toC);
    console.log("result:" +result);
}
