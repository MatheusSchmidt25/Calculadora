function inserir(num){
    var numero=document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML=numero+num
}
function apagarTudo(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("conta").innerHTML = "";
}
function apagar(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
    document.getElementById("conta").innerHTML = "";
}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("conta").innerHTML = resultado;
        document.getElementById("resultado").innerHTML = eval(resultado);  
    }else{     
        document.getElementById("conta").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    } 
}

const $html = document.querySelector("html");
const $checkbox = document.getElementById("modo");

$checkbox.addEventListener("change", function(){
    $html.classList.toggle("dark-mode")
})