//Getters e setters seriam maneira de proteger as minhas propriedades

function Produto(nome, preco, estoque) {
    this.nome = nome; 
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true, 
        get: function() { //Aqui estamos obtendo o valor
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('bad value');
                return
            }

            estoquePrivado = valor;
        }
        });
};

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 134;

console.log(p1.estoque);


function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}