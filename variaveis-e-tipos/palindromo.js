//solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";
    
    const verifica = string.split("").reverse().join("") === string;
    if(!verifica){
        return "não é um palíndromo";
    } 
    return "É um palíndromo";
}

console.log(verificaPalindromo("ana"));

//solução 2
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length; i++ ){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
        
        return true;
    }
}
console.log(verificaPalindromo2("ovo"))