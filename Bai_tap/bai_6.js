
function Addition(){

    let number1Input=document.getElementById('number1').value;
    let number2Input=document.getElementById('number2').value;
    let number1=parseFloat(number1Input);
    let number2=parseFloat(number2Input);
    let addresult=number1+number2;
    console.log("number1= " +number1);
    console.log("number2= " +number2);
    console.log("result= " +addresult);

    document.getElementById('result').innerHTML='Result: ' +addresult;
}
function Subtraction(){
    let number1Input=document.getElementById('number1').value;
    let number2Input=document.getElementById('number2').value;
    let number1=parseFloat(number1Input);
    let number2=parseFloat(number2Input);
    let subresult=number1-number2;
    console.log("number1= " +number1);
    console.log("number2= " +number2);
    console.log("result= " +subresult);

    document.getElementById('result').innerHTML='Result: ' +subresult;
}
function Multiplication(){
    let number1Input=document.getElementById('number1').value;
    let number2Input=document.getElementById('number2').value;
    let number1=parseFloat(number1Input);
    let number2=parseFloat(number2Input);
    let multiresult=number1*number2;
    console.log("number1= " +number1);
    console.log("number2= " +number2);
    console.log("result= " +multiresult);

    document.getElementById('result').innerHTML='Result: ' +multiresult;
}
function Division(){
    let number1Input=document.getElementById('number1').value;
    let number2Input=document.getElementById('number2').value;
    let number1=parseFloat(number1Input);
    let number2=parseFloat(number2Input);
    let divresult=number1/number2;
    console.log("number1= " +number1);
    console.log("number2= " +number2);
    console.log("result= " +divresult);

    document.getElementById('result').innerHTML='Result: ' +divresult;
}