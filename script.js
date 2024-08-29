let generate=document.getElementById("click");
let result=document.getElementById("password");
let upp=document.getElementById("upp");
let sym=document.getElementById("sym");
function generatepassword(Length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers="0123456789";   
    let symbols="!@#$%&_";

    let allowedchars="";
    let password="";
    if(includeUppercase){
        allowedchars+=uppercase;
    }
    if(includeLowercase){
        allowedchars+=lowercase;
    }
    if(includeNumbers){
        allowedchars+=numbers;
    }
    if(includeSymbols){
        allowedchars+=symbols;
    }

    for(let i=0; i<Length; i++){
        let random= Math.floor(Math.random()*allowedchars.length);
        password+= allowedchars[random];
    
    }
    return password;
}
let passwordLength=prompt(`Enter the length of the password`);
passwordLength=parseInt(passwordLength);
    while(isNaN(passwordLength)){
        passwordLength=prompt(`Enter the length of the password`);
        passwordLength=parseInt(passwordLength);
    }

let includeUppercase= false;
upp.addEventListener("change", function() {


    if (upp.checked) {
        includeUppercase=true;
    }});
let includeLowercase = false;
low.addEventListener("change", function() {


    if (low.checked) {
        includeLowercase =true;
    }});

let includeNumbers = false;
num.addEventListener("change", function() {


    if (num.checked) {
        includeNumbers=true;
    }});
    let includeSymbols = false;
    sym.addEventListener("change", function() {


        if (sym.checked) {
            includeSymbols=true;
        }});

let final;

generate.onclick=function(){
    final= generatepassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    result.textContent=final;
}