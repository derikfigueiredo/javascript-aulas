//             Método das promises
//Promise.all() : Retorna todas as funções resolvidas.
//Promise.race() : A primeira a ser resolvida será retornada.
//Promise.resolve() : Retorna um objeto promise que foi resolvido.
//Promise.reject() : Retorna um objeto que foi rejeitado por um dado motivo.

      function rand(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
      }
      
      function esperaAi(msg, tempo) {
        return new Promise((resolve, reject) => {
          if(typeof msg !== 'string') {
              reject(false) 
              return
          };
      
          setTimeout(() => {
            resolve(msg);
          }, tempo);
        });
      }
    
    
      const promises = [
        esperaAi('promise 1', 3000),
        esperaAi('promise 2', 5000),
        esperaAi('promise 3', 1000),
        'Outro Valor'
      ] 
    
      Promise.all(promises)
        .then(function(valor){
            console.log(valor)
        })
        .catch(function(erro) {
            console.log(erro)
        })

//////////////////////////////////////////////////////////////////////////////


/*
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject(false);
  
      setTimeout(() => {
        resolve(msg);
      }, tempo);
    });
  }


  const promises = [
    'Primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 5000),
    esperaAi('promise 3', 1000),
    'Outro Valor'
  ] 

  Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

    */

    //////////////////////////////////////////////////////////////////////
