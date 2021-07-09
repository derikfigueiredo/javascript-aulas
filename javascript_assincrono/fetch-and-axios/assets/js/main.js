
fetch('pessoas.json') //Buscar os dados do JSON
    .then(resposta => resposta.json()) //Pegamos a primeira respostas, convertemos para JSON e retornamamos uma nova promise.
    .then(json => carregaElementosNaPagina(json)); //Pegamos a nova promise, com o valor do json, mandamos para o função carregaElementosNaPagina()

    //RESOLVER COM AXIOS
// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    table.innerHTML = `<tr> <th>Nome</th> <th>Idade</th> <th>CPF</th> </tr>`;

for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.cpf;
    tr.appendChild(td3);

    table.appendChild(tr);
}

    const resultado = document.querySelector('#resultado');
    resultado.appendChild(table);
}
