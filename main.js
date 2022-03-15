let nome = document.getElementById("nome");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
// var altura = "";
// altura = parseFloat(document.getElementById("altura").value);
// var peso = "";
// peso = parseFloat(document.getElementById("peso").value);
let registrar = document.getElementById("btn-reg");
let body = document.querySelector("body");
let div = document.createElement("div");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let botao = document.getElementById("btn-reg");
let imc = peso/(altura*altura);
botao.addEventListener("click", calculo);

// function calculo(){

//   console.log(imc);
//   let linha = document.createElement("tr");
//   let tNome = document.createElement("th");
//   let tPeso = document.createElement("th");
//   let tAltura = document.createElement("th");
//   let tIMC = document.createElement("th");
//   tNome.innerHTML = nome.value;
//   tPeso.innerHTML = peso;
//   tAltura.innerHTML = altura;
//   tIMC.innerHTML = imc.value;

//   linha.appendChild(tNome);
//   linha.appendChild(tAltura);
//   linha.appendChild(tPeso);
//   linha.appendChild(tIMC);
//   thead.appendChild(linha);

//   table.appendChild(thead);
//   table.appendChild(tbody);
// }

function calculo()
{
let linha1 = document.createElement("tr");
let tNome = document.createElement("td");
let tPeso = document.createElement("td");
let tAltura = document.createElement("td");
let tIMC = document.createElement("td");

tNome.innerHTML = nome.value;
tPeso.innerHTML = peso.value;
tAltura.innerHTML = altura.value;
tIMC.innerHTML = "IMC";

linha1.appendChild(tNome);
linha1.appendChild(tPeso);
linha1.appendChild(tAltura);
linha1.appendChild(tIMC);
thead.appendChild(linha1);

table.appendChild(thead);
table.appendChild(tbody);
}



document.querySelector("body").appendChild(table);

