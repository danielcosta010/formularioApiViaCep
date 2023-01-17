async function buscaEndereco(cep) {
	try {
    var mensagemDeErro = document.querySelector('.erro');
    mensagemDeErro.innerHTML = '';
    console.log(mensagemDeErro);
	  var consultaCep = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
	  var consultaCepParaJson = await consultaCep.json();

    var rua = document.querySelector('#rua');
    var cidade = document.querySelector('#cidade');
    var bairro = document.querySelector('#bairro');
    var estado = document.querySelector('#estado');
  
    rua.value = consultaCepParaJson.logradouro;
    bairro.value = consultaCepParaJson.bairro;
    cidade.value = consultaCepParaJson.localidade;
    estado.value = consultaCepParaJson.uf;

    return consultaCepParaJson

	} catch(erro) {
    mensagemDeErro.innerHTML = `<span>Cep inválido! Tente novamente.</span>`;
    mensagemDeErro.classList.add('erro__texto');
	  
	}

}



var campoCep = document.querySelector('#cep');
campoCep.addEventListener('focusout', () => buscaEndereco(campoCep.value));


