// declaração de função

function minhaFuncao(param){
    // bloco de codigo
}

minhaFuncao("param");

//expresao de funcao

const soma = function(num1, num2) {
    return num1 + num2
}
//console.log(soma(50, 50));
// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo

console.log(apresentar());

function apresentar(){
    return "olá";
}

console.log(soma(1, 1));

const nome = function(num1, num2){
    return num1 + num2
}