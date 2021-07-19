class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (e)=>{
      e.preventDefault();
      this.camposSaoValidos(e);
      this.senhasSaoValidas();
      console.log(this.camposSaoValidos())

      //if(this.camposSaoValidos() && this.senhasSaoValidas()) {
       // console.log(this.camposSaoValidos() && this.senhasSaoValidas())
     // }
    })
  }

  camposSaoValidos(e) {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

     for(let campo of this.formulario.querySelectorAll('.validar')) {
       if(!campo.value) {
         const labelText = campo.previousElementSibling.innerText;
         const text = `Campo ${labelText} não pode estar em branco`;
         this.criarErro(campo, text);

         valid = false;
       }

       if(campo.classList.contains('cpf')) {
          if(!this.validaCPF(campo)) {
            this.criarErro(campo, `CPF inválido`);
            valid = false;
          };
        }

        if(campo.classList.contains('usuario')) {
          this.validaUsuario(campo)
        }
     }

     return valid;
  }

  validaCPF(cpfCampo) {
    let cpf = new ValidaCPF(cpfCampo.value);

    return cpf.valida()
  }

  criarErro(campo, msg) {
    let div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = msg;
    //campo.nextElementSibling.innerHTML = div;
    campo.insertAdjacentElement('afterend', div);
  } 

  validaUsuario(campo) {
    let usuario = campo.value;
    let valid = true;
    
    if(campo.value.length < 3 || campo.value.length > 12) {
      this.criarErro(campo, `Nome de usuário deve ter entre 3 e 12 caracteres`);
      valid = false;
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/gi)) {
      this.criarErro(campo, `Nome de usuário precisa conter letras e/ou números`)
      valid = false;
    }

    return valid
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criarErro(senha, `Campos senha e repetir senha precisam ser iguais`);
      this.criarErro(repetirSenha, `Campos senha e repetir senha precisam ser iguais`)
    }
    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criarErro(senha, `Senha precisa ter entre 6 e 12 caracteres`)
    }

    return valid;
  }
}

const valida = new ValidaFormulario();



















/*
class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
      this.formulario.addEventListener('submit', (e)=>{
        this.handleSubmit(e)
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos()
  }

  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const labelText = campo.previousElementSibling.innerText;
      if(!campo.value) {
        this.criaErro(campo, `Campo ${labelText} não pode estar em branco`);
        valid = false;
      }
    }
    }

  criaErro(campo, msg) {
    let div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = msg;
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario()
*/
