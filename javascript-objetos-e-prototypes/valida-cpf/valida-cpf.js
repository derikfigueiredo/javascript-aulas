function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  })
}


ValidaCPF.prototype.valida = function() {
  if(this.cpfLimpo.length !== 11) return false;
  if(this.cpfLimpo == this.sequencia()) return false;

  let cpfParcial = this.cpfLimpo.slice(0, -2);


  let digito1 = this.criaDigito(cpfParcial);
  let digito2 = this.criaDigito(cpfParcial + digito1)

  const novoCPF = cpfParcial + digito1 + digito2;

  return novoCPF == this.cpfLimpo;
}



ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  let cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((ac, item) => {
    ac += (regressivo * Number(item));
    regressivo--
    return ac;
  }, 0)

 const digito = 11 - (total % 11);
 return digito > 9 ? '0' : String(digito);
}




ValidaCPF.prototype.sequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia;
}


let cpf = new ValidaCPF('070.987.720-03');


if(cpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido')
}


/* //POR QUE ISSO AQUI RETORNA STRING AO INVÉS DE NÚMERO//
const total = cpf.reduce((ac, item) => {
  ac += (regressivo * Number(item));
  regressivo--
  return ac;
})

//AGORA DESSA FORMA RETORNA NÚMERO
 const total = cpf.reduce((ac, item) => {
    ac += (regressivo * Number(item));
    regressivo--
    return ac;
  }, 0)
*/
