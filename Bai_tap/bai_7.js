function Calculator(value){
    console.log("value= " +value);
    let number1Input=document.getElementById('number1').value;
    let number2Input=document.getElementById('number2').value;
    let number1=parseFloat(number1Input);
    let number2=parseFloat(number2Input);
    let result;
    if (value=="a"){
        result=number1+number2;
    }
    if(value=="b"){
        result=number1-number2;
    }
    if(value=="c"){
        result=number1*number2;
    }
    if(value=="d"){
        result=number1/number2;
    }
    document.getElementById('result').innerHTML='Result: ' +result;
}