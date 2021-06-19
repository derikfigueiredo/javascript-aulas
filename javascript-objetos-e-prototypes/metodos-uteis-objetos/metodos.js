//Aula 73 Métodos utéis para objetos

//Caso 1
const produto = { nome: 'Caneca', preco: 1.8};
//const outraCoisa = produto //aqui o que eu alterar em produto tbm irá alterar em outraCoisa
const outraCoisa = { ...produto}; //Aqui se eu alterar a variável outraCoisa, o objeto produto não irá sofrer a alteração

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

