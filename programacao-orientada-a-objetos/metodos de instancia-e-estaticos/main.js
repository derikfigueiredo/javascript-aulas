// Métodos de instância e estáticos
//Métodos estáticos são métodos que você pode acessar na classe sem instância a classe;
//Não vão estar disponível dentro da instância
//Apenas estarar ligado a classe

//DEFINIÇÃO DE MÉTODOS ESTÁTICOS NA MDN.
//A palavra chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
//Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. Métodos estáticos são comumente utilizados como funções utilitárias.


class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Métodos de instância 
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático
  static soma(x, y) {
    console.log( x + y );
  }

  //Os métodos estáticos não tem acesso aos dados da instância
  static teste() {
    console.log(this) //O this é referente a classe em sí e não a instância.
    console.log(this.tv);
  }
}

let controle1 = new ControleRemoto('LG');
//Acessando métodos com instância
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

//Acessando métodos pela a classe
ControleRemoto.soma(2, 5);
ControleRemoto.teste();

//console.log(controle1);

//Os métodos estáticos não tem acesso aos dados da instância
//O objeto é uma instância da classe e a instância acessa os comportamentos pré-definidos.
