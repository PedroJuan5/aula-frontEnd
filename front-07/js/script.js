const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

// Função Limpar campo
function clearInput() {
    nome.value = "";
}

// Criando uma Função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;

    // Adicionando lista <LI>
    lista.innerHTML  += templateHTML;
    
    // Limpando Campo
    clearInput();
});