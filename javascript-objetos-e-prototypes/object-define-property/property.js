//AULA 71 - 90. Object.defineProperty() e Object.defineProperties()


//Vamos criar nossa função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome; //Tornar a variável pública
    this.preco = preco;

    //    Object.defineProperty(qual objeto eu quero trabalhar, 'qual propriedade')
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostrar a chave
        value: estoque, //Colocar valor da propriedade
        writable: true, //Pode alterar o valor da propriedade
        configurable: true //permitir alterar as configurações da propriedade como value, writable
    });

    //alterando as configurações da propriedade anterior caso o configurable esteja como true
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, //Mostrar a chave
    //     value: estoque, //Colocar valor da propriedade
    //     writable: false, //Pode alterar o valor da propriedade
    //     configurable: true //permitir alterar as configurações da propriedade como value, writable
    // });
    //Configurable como false não permite apagar alguma propriedade e nem alterar seu valor

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable: true 
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 100;

console.log(p1);
