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
    if(includeUppercase == false && includeLowercase == false && includeNumbers == false && includeSymbols == false){
        return "Please select atleast one option";}

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
    }
    else{
        includeUppercase=false;
    }
});
let includeLowercase = false;
low.addEventListener("change", function() {


    if (low.checked) {
        includeLowercase =true;
    }
    else{
        includeLowercase=false;
    }
});

let includeNumbers = false;
num.addEventListener("change", function() {


    if (num.checked) {
        includeNumbers=true;
    }
    else{
        includeNumbers=false;
    }
});
    let includeSymbols = false;
    sym.addEventListener("change", function() {


        if (sym.checked) {
            includeSymbols=true;
        }
        else{
            includeSymbols=false;
        }
    });

let final;

generate.onclick=function(){
    final= generatepassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    result.textContent=final;
}