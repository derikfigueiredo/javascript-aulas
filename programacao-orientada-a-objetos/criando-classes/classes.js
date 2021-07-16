//Class é similar a função construtora, fazem a mesma coisa.
//Todo nome de class deve começar com letra maiúscula e para invoca-la é necessário utilizar o new (nome da class)
class PessoaClass {
    //criamos a função constructor para criar parâmentos
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }

    //Em classes os métodos criados já são linkados/atrelado ao prototype do obj.
    falar() {
      console.log(`${this.nome} está falando`)
    }

    comer() {
      console.log(`${this.nome} está comendo`)
    }

    beber() {
      console.log(`${this.nome} está bebendo`)
    }
}

const p1Class = new PessoaClass('Luiz','Miranda')
const p2Class = new PessoaClass('Dérik', 'Figueiredo')

console.log(p1Class, p2Class)





//AGORA, A MESMA LÓGICA COM FUNÇÃO CONSTRUTORA
function Pessoa(nome, sobrenome) {
  this.nome = nome,
  this.sobrenome = sobrenome
}

Pessoa.prototype.falar = function() {
  console.log(`${this.nome} está falando`)
}

Pessoa.prototype.comer = function() {
  console.log(`${this.nome} está comendo`)
}


const p1 = new Pessoa('Luiz','Miranda')
const p2 = new Pessoa('Dérik', 'Figueiredo')

console.log(p1, p2)

//Instanciar um obj significa criar um obj a partir da class.
//Para criar uma class utiliza class e depois colocomos o nome que começa com letra maiuscula

