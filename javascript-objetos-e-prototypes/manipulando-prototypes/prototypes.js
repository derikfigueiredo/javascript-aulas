const objA = {
  chaveA: 'A'
}

const objB = {
  chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';

//setPrototypesOf para conseguimos mandar as propriedades de objA para objB
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.dir(objC)


////////////////////////////////////////////////
/*
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}


Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco) * (percentual / 100)
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
//p1.desconto(100)
console.log(p1)


//////////////////////////////////////////////////////////

// CRIAR UM OBJETO SEM A FUNÇÃO CONSTRUTORA PRODUTO, MAS REAPROVEITAR AS FUNÇÕES DELA
//Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10)

console.log(p2)


//CRIAR UM OBJETO E JÁ SETAR O SEU PROTOTYPE
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});

p3.aumento(10);
console.log(p3)
*/
