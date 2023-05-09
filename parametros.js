
// parametros de função
              //2   //2
function soma(numero1, numero2) {
    return numero1 + numero2;
}



//console.log(soma(2,2));
//console.log(soma(535, 200));
//console.log(soma(-500, 495));


//parametros X argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos`
}

console.log(nomeIdade("Luan", 28));


function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5)));
