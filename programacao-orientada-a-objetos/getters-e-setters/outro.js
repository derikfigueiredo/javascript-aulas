const _velocidade = Symbol('velocidade'); 

class Moto {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0; 
  }

  set velocidade(valor) {
    console.log('SETTER')
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor
  }

  get velocidade() {
    return this[_velocidade];
  }
/*
  acelerar() {
    if(this.velocidade  >= 200) return
    this.velocidade++
  }

  freiar() {
    if(this.velocidade <= 0) return
    this.velocidade--;
  }
*/
}

let m1 = new Moto('Titan')

console.log(m1)
