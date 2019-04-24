function Input(par){
    document.getElementById('screen').value+=par;
}
function Calculator(){
    let result;
    result= document.getElementById('screen').value;
    document.getElementById('screen').value=eval(result);
}
function Clear(){
    document.getElementById('screen').value="";
}