function showMessage() {

    let amountInput = document.getElementById('amount').value;
    let amount = parseFloat(amountInput);
    // let result, fromUsdRate, toUsdRate;
    // let fromC = document.getElementById('fromCurrency').value;
    // let toC = document.getElementById('toCurrency').value;
    // switch (fromC) {
    //     case("VND"):
    //         fromUsdRate = 1 / 23000;
    //         break;
    //     case("USD"):
    //         fromUsdRate = 1;
    //         break;
    //     case("CNY"):
    //         fromUsdRate = 1 / 6.5;
    //         break;
    //     case("JPY"):
    //         fromUsdRate = 1 / 112;
    //         break;
    //     case("EUR"):
    //         fromUsdRate = 1.12;
    //         break;
    //     case("WON"):
    //         fromUsdRate = 1 / 1141;
    //         break;
    //     case("SGD"):
    //         fromUsdRate = 1 / 1.36;
    //         break;
    //     case("GBP"):
    //         fromUsdRate = 1.29;
    //         break;
    //
    // }
    // switch (toC) {
    //     case("VND"):
    //         toUsdRate = 23000;
    //         break;
    //     case("USD"):
    //         toUsdRate = 1;
    //         break;
    //     case("CNY"):
    //         toUsdRate = 6.5;
    //         break;
    //     case("JPY"):
    //         toUsdRate = 112;
    //         break;
    //     case("EUR"):
    //         toUsdRate = 1 / 1.12;
    //         break;
    //     case("WON"):
    //         toUsdRate = 1141;
    //         break;
    //     case("SGD"):
    //         toUsdRate = 1.36;
    //         break;
    //     case("GBP"):
    //         toUsdRate = 1 / 1.29;
    //         break;
    // }
    let a=eval((document.getElementById("fromCurrency").value));
    let b=eval((document.getElementById("toCurrency").value));
    result = a*b* amount;
    document.getElementById('result').innerHTML = 'Result= ' + result;

}
