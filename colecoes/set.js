const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    
    // return [mySet];  <- esse vai retornar o set dentro do arr 
    //esse retorna os elementos dentro do set no array 
    return [...mySet];
}

console.log(valoresUnicos(myArr));