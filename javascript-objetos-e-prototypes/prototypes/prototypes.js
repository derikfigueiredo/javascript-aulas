/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.
Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.
Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

/* Quando criamos um objetos, automaticamento teremos uma propriedade que referencia a um 
outro objeto. Todo objeto em JavaScript herda propriedade e métodos do seu prototype ascedente */

//PROTOTYPE CHAIN(Encadeamento de protótipos) = Um objeto possui um prototype e esse prototype também pode ter um prototype que tem outro e assim por diante até que o último elemento dessa sequência seja igual null.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);


// Como a cadeia de protótipos funcionam. Essa é a sequência que javaScript irá realizar para 
// pessoa -> pesssoa.prototype -> Object.prototype 


//Não existem Classes em JavaScript. Elas são só um Syntax Sugar para a Herança baseada em protótipo da linguagem
//o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. 