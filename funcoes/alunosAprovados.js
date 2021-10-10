const alunos = [{aluno: "Pedro", nota: 6}, {aluno: "Maria", nota: 8},{aluno: "Matheus", nota: 9}, {aluno: "Roberta", nota: 4}];


function alunosAprovados(arr, media){
    let aprovados = [];


    for(let i = 0; i < alunos.length; i++){
        const { aluno , nota} = arr[i];
        if (nota >= media){
            aprovados.push(aluno);
        }
    }
    return aprovados;

}

console.log(alunosAprovados(alunos, 6));

// this Atividade

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Emily",
    idade: 4,
};
const pessoa2 = {
    nome: "Kevin",
    idade: 9,
};
const pessoa3 = {
    nome: "Diego",
    idade: 11,
};

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa3, [10]));