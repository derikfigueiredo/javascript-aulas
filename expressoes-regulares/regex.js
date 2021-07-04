//   Website para treinar: https://regexr.com/;
//   Expressões regulares são uma forma de procurar algo em um texto.
//   Uma expressão regular (regular expression ou Regex) é uma sequência de caracteres que forma um padrão de pesquisa.
//   As RegEx são baseadas em dois elementos: um padrão e modificadores. Esses elementos, em conjunto, formam a chamada expressão regular, cuja sintaxe básica é bastante simples:
//   /padrão/modificadores


//MODIFICADORES:
  //i ->  Não leva em consideração maiúsculas e minúsculas (case-insensitive).
  //g ->  Global Match – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.
  //m -> Procura por ocorrências em múltiplas linhas.


//EXPRESSÕES
  //   /ea?/g ou /ea*/g ->  encontrar ou apenas e ou ea.
  //   [^abc]/i -> qualquer caracter que não seja A, B e C.
  //   /ea../g -> os .. representa espaço
  //   () -> grupos
  //    | -> ou


const { texto } = require('./base');

//const regExp1 = /João/gi;
//const regExp1 = /(teve )(5 filhos)/gi; //Separamos o padrão e dois grupos, Agora estamos procurando 3 padrões: ou (teve 5 filhos) ou (teve) ou (5 filhos)


//console.log(regExp1.test(texto)); // Perguntando se existe a palavra joão

//console.log(regExp1.exec(texto)); // Irá retornar se isso foi encontrado, onde foi encontrado
//console.log(regExp1.exec(texto)[0]); //Retorna o que foi procurado
//console.log(regExp1.exec(texto).index);
//console.log(regExp1.exec(texto).input); // retorna o text em sí.




const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);
if (found) {
  console.log(found)
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}




// let text = "The fat cat ran";

// console.log(text.search(/[abc]/m));

// let arr = ['1', '2', '3', '4']

