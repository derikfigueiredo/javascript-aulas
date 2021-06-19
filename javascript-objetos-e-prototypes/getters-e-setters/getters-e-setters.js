function Produto(nome, preco, estoque) {
    this.nome = nome; 
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque, 
        writable: true, 
        configurable: true 
    });
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 100;

console.log(p1);