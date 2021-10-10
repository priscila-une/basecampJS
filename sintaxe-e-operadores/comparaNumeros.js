function comparaNumeros(num1, num2){
    if(!num1 || !num2) return "Digite dois números maior que 0";
    
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
} 

function criarPrimeiraFrase(num1, num2){
    let saoIguais = "";
    if(num1 !== num2){
        saoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = "menor que";
    let resultado20 = "menor que"
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    const igual20 = soma == 20;
    const igual10 = soma == 10;
    
    if(igual10){
        resultado10 = "igual a"
    }
    if(compara10){
        resultado10 = "maior que";
    }
    if(igual20){
        resultado20 = "igual a";
    }
    if(compara20){
        resultado20 = "maior que";
    }

    return ` Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20`;
}
    
console.log(comparaNumeros(0, 0));
    
