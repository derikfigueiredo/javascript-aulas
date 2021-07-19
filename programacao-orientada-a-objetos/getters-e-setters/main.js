const _velocidade = Symbol('velocidade'); //Essa função produz uma chave privada para que alguma propriedade do obj não seja alterada. Toda vez que eu chamar o Symbol, seu valor será diferente, nunca igual.

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0; //Propriedade privada, não pode ser acessada facilmento
  }

  //Utilizamos set para setar um novo valor a propriedade escolhida no obj.
  set velocidade(valor) {
    console.log('setter')
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor; 
  }

  //Utilizamos get para pegar valor de uma propriedade do obj.
  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--
  }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
  c1.acelerar()
}

c1.velocidade = 200;

console.log(c1.velocidade)
/*
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  } //Com get, o método nomeCompleto passa a ser apenas uma propriedade, para acessa-la, basta digitar p1.nomeCompleto e não p1.nomeCompleto()

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ')
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
*/
