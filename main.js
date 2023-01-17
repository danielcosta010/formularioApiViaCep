async function buscaEndereco(cep) {
	try {
    var mensagemDeErro = document.querySelector('.erro');
    mensagemDeErro.innerHTML = '';
    console.log(mensagemDeErro);
	  var consultaCep = await (await fetch(`http://viacep.com.br/ws/${cep}/json/`)).json();

    var rua = document.querySelector('#rua');
    var cidade = document.querySelector('#cidade');
    var bairro = document.querySelector('#bairro');
    var estado = document.querySelector('#estado');
  
    rua.value = consultaCep.logradouro;
    bairro.value = consultaCep.bairro;
    cidade.value = consultaCep.localidade;
    estado.value = consultaCep.uf;

    return consultaCep

	} catch(erro) {
    mensagemDeErro.innerHTML = `<span>Cep inválido! Tente novamente.</span>`;
    mensagemDeErro.classList.add('erro__texto');
	  
	}

}



var campoCep = document.querySelector('#cep');
campoCep.addEventListener('focusout', () => buscaEndereco(campoCep.value));


