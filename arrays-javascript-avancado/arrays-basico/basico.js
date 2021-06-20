////////////////////TRANSFORMAR ARRAYS EM STRINGS////////////////////////////////
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

let res = lista.toString();

console.log(res);
*/
//Outra forma
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

//O join transforma o array em string e o que você colocar como paramento dentro será o que irá separar os items.
let res = lista.join('-');

console.log(res);
*/
/////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////// IndexOf /////////////////////////////////////////////
//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

let res = lista.indexOf('Corante');

console.log(res);
*/
//////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////REMOVENDO ITENS////////////////////////////////////////////
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

//Remover o último item do array
lista.pop();

//Remover o primeiro item
lista.shift();

let res = lista;

console.log(res);
*/



/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

//Deletar item
//delete lista[1]


//Deletar item, (qual o index que você vai remover, quantos itens você quer remover)
lista.splice(2,1)

let res = lista;

console.log(res);
*/

////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////ADICIONAR ELEMENTOS//////////////////////////////////////
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

//Colocar um novo arquivo
lista.push('prato');

let res = lista;//.push('prato')

console.log(res);
*/

/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

lista[0] = 'maça'; //Alterar item, se o item não existir, ele irá criar

let res = lista;

console.log(res);
*/

//////////////////////////////////////////////////////////////////////



/////////////////////////JUNTAR ARRAYS////////////////////////////////
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];
let lista2 = ['prato','liquidificador','forno'];

let res = lista.concat(lista2);

console.log(res);
*/


/////////////////////////////////////ORDENAR ARQUIVOS///////////////////////////////////////
/*
let lista = ['Ovo','Farinha','Corante', 'Massa'];

lista.sort(); //Ordem alfabética
//lista.reverse(); //Inverter a ordem//Descrescente

let res = lista;

console.log(res);
*/
////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////// MAP /////////////////////////////////////////////////
//O metodo map serve para pegar item a item de um array e modificá-los. Irá mapear e gerar um novo array.
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
//A função callback no map é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.
//array.map((valorDoElementoOriginal, O índice do elemento atual que está sendo processado no array, O Array de origem.)=>{})
//s elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.
/*
let lista = [45, 4, 9, 16, 25];

let lista2 = [];

lista2 = lista.map(function(item) {
    return item * 2;
});

console.log(lista2);

//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação. ... 
*/

//RESOLVENDO O PROBLEMA ANTERIOR SEM O MAP
/*
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

for(let i in lista) {
       lista2.push(lista[i] * 2);
}

let res = lista2;

console.log(res);
*/
/////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////// FILTER ///////////////////////////////////////////////
//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
//filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true.
//Filter filtra os elementos do array, a função callback nele terá um teste, e o elemento que passar será retornado.
/*
let lista = [45, 4, 9, 16, 25];

lista2 = lista.filter(function(item) {
    if(item < 20) {
        return true;
    } else {
        return false
    }
})

let res = lista2;

console.log(res);
*/
//////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// SOME E EVERY ///////////////////////////////////////////////
/*
let lista = [45, 4, 9, 16, 25];

lista2 = lista.some(function(item){

})
//some vs every
//Some retorna true mesmo que alguns sejam falsos

let res = lista2;

console.log(res);
*/

/////////////////////////////////////////// FIND /////////////////////////////////////////////
/*
let lista = [45, 4, 9, 16, 25];

lista2 = lista.find(function(item){
    return (item == 16) ? true : false;
})*/
/*
//find - retorna o valor
//findIndex - retorna a posição do valor
 
console.log(res);
*/
/*
let lista = [
    {id:1, nome:'Bonieky', sobrenome:'Lacerda'},
    {id:2, nome:'Paulo', sobrenome:'xyz'},
    {id:2, nome:'Fulano', sobrenome:'Da Silva'}
];

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'Da Silva') ? true : false;
})

let res = pessoa;

console.log(res);
*/
///////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////// DIFERENÇA DE MAP COM FOREACH /////////////////////////////////
// map(): O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// foreach(): O método forEach() executa uma dada função em cada elemento de um array.
//forEach altera os valores originais, já o map não altera os valores originais e sim cria um novo array com os valores alterados.
/*
let arrforEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let arrmap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//forEach
arrforEach.forEach((num, index) => {
    return arrforEach[index] = num * 2;
});

console.log('forEach '+arrforEach);

//Map
let doubled = arrmap.map(num => {
    return num * 2;
});
console.log('map '+arrmap);
console.log('map '+doubled);
*/
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// REDUCE ///////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
