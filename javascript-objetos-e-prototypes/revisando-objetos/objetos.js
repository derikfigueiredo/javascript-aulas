//Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).


//Objeto literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

//Objeto construtor
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 19;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

//Acessando as chaves do objeto atráves da notação de colchetes
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

//Acessando as chaves do objeto atráves da notação de pontos
/*console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.falarNome();

console.log(pessoa1.getDataNascimento())

for (let chave in pessoa) {
    console.log(pessoa[chave]);
} 
*/
//Apagar alguma chave
//delete pessoa1.sobrenome;




