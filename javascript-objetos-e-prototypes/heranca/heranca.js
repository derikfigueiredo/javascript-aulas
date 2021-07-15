// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //Dessa forma, Produto.prototype passa a ser o obj pai do Camiseta e Camiseta herda suas propriedades. Contudo, os métodos e propriedades que estão no protótipo do pai não são herdados e por causa disso iremos precisar de utilizar Object.create()
  this.cor = cor;

}

//Camiseta.prototype = Produto.prototype; //Dessa forma é incorreto, pois agora o que nós alteramos em Camiseta.prototype também irá alterar em Produto.prototype.

Camiseta.prototype = Object.create(Produto.prototype); //Agora estamos passando todas as propriedades criadas no obj Produto para o obj Camiseta. Contudo, isso irá alterar o construtor do nosso obj e com isso, o construtor do obj camiseta passa a ser Produto, ao invés de ser Camiseta.
Camiseta.prototype.constructor = Camiseta;


//Nós podemos subescrever um obj do nosso elemento
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}
//Com isso, o método aumento será procurado primeiro no camiseta.prototype, depois ele irá no produto prototype que é pai do camiseta, depois ele irá atrás dos métodos do obj pai de todos.

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

console.log(camiseta);


//////////////////////////////////////////////////////////////////////////////////////

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);

///////////////////////////////////////////////////////////////////////////

const produto = new Produto('Gen', 111);
console.log(produto);
