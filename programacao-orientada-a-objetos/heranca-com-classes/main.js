class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já ligado')
      return
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já desligado')
      return
    }

    return false;
  }
}

let d1 = new DispositivoEletronico('Smpartphone');
d1.ligar();
console.log(d1)


class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome) //A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe e executar uma das propriedades dele no obj filho.

    this.cor = cor;
    this.modelo = modelo;
  }

} //a class Smartphone  está sendo criada e herdando propriedades da class DispositivoEletronico.
const s1 = new Smartphone('Samsung', 'preto', 'S10')

console.log(s1)

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome)
    
    this.temWifi = temWifi;
  }

  //subescrevendo o método ligar
  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }

  falaOi() {
    console.log('Oi')
  }
}

const t1 = new Tablet('Ipad', true);
t1.ligar()
console.log(t1)
