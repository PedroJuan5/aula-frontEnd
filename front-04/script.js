//Criando variaveis
const nome = document.getElementById("nome");
const ciade = document.getElementById("cidade");  

const resultado = document.getElementById("resultado");
const resultadoCid = document.getElementById("resultadoCid");

//criando função
function limparCampos() {
    nome.value = "";
}    cidade.value = "";


function mudar (event) {
    event.preventDefault();
 
     //Imprimir nome na tela
     resultado.innerHTML = nome.value;
    resultadoCid.innerHTML = cidade.value;
     
    //Limpando os campos
    limparCampos();
}
