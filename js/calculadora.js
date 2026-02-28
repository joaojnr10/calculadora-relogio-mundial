let display = document.getElementById("display")

function adicionar(valor) {
    display.value += valor; // serve para adicionar números.
}

function limpar() {
    display.value = ""; //serve para apagar tudo.
}

function apagar() {
    display.value = display.value.slice(0, -1); // serve para apagar um numero de cada vez.
}

// serve para fazer os calculos.
function calcular() {
    try  {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro"
    }
}