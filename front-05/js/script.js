// Obtém Alguns Elementos Do DOM
const valor1 = document.getElementById("valor1");
const valor2 =  document.getElementById("valor2");

// Variaveç Resultado
const resultado = document.getElementById("resultado");

function limparCampos () {
    valor1.value = "";
    valor2.value = "";

}

function tempo() {
    setTimeout(function() {
            resultado.innerHTML = "Giovanni"
    }, 2000);
}


//Croando Função SOMA
function somar(event) {
    event.preventDefault();
    let resultadoSoma = Number(valor1.value) + Number(valor2.value)
    
    resultado.innerHTML = resultadoSoma;


    //Função Sub
    function sub(event) {
        event.preventDefault;

        let resultadoSub = number(valor1.value) + number(valor2.value);
        resultado.innerHTML = resultadoSub
    }
    //Limpar campos
    limparCampos();

    //Função tempo
  tempo();
}