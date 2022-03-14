let nome = document.getElementById("nome").value;
let altura = document.getElementById("altura").value;
let peso = document.getElementById("peso").value;
let registrar = document.getElementById("btn-reg");
let imc = altura*altura/peso;
let body = document.querySelector("body");
let div = document.createElement("div");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

function calculo()
{
    
let linha = document.createElement("tr");
let tNome = document.createElement("th");
let tPeso = document.createElement("th");
let tAltura = document.createElement("th");
let tIMC = document.createElement("th");
tNome.innerHTML = nome.innerHTML;
tPeso.innerHTML = "PESO";
tAltura.innerHTML = "ALTURA";
tIMC.innerHTML = "IMC";

linha.appendChild(tNome);
linha.appendChild(tPeso);
linha.appendChild(tAltura);
linha.appendChild(tIMC);
thead.appendChild(linha);

table.appendChild(thead);
table.appendChild(tbody);
}

// function calculo()
// {
// let linha1 = document.createElement("tr");
// let tNome = document.createElement("th");
// let tPeso = document.createElement("th");
// let tAltura = document.createElement("th");
// let tIMC = document.createElement("th");

// tNome.innerHTML = "NOME";
// tPeso.innerHTML = "PESO";
// tAltura.innerHTML = "ALTURA";
// tIMC.innerHTML = "IMC";

// linha1.appendChild(tNome);
// linha1.appendChild(tPeso);
// linha1.appendChild(tAltura);
// linha1.appendChild(tIMC);
// thead.appendChild(linha1);

// table.appendChild(thead);
// table.appendChild(tbody);
// }

let botao = document.getElementById("btn-reg");
botao.addEventListener("click", calculo);

document.querySelector("body").appendChild(table);

