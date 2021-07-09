//API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.       
       
/*
fetch('pagina1.html')
 .then(resposta => {
    if(resposta.status !== 200) throw new Error('ERROR 4004 NOSSO');
    console.log(resposta)
    //return resposta.text();
 })
//  .then(html => console.log(html))
//  .catch( e => console.log(e))
*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag == 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
    .then(response => {
        if(response.status !== 200) throw new Error('ERROR 404!')
        return response.text()
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = response;
}
*/
////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag == 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('ERROR 404!');

    const html = await response.text();
    carregaResultado(html);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = response;
}
