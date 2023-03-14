var form = document.getElementById("form-validar");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const valorA = document.getElementById("valor-A");
  const valorB = document.getElementById("valor-B");
  const mensagemValidar = `O valor foi validado`;
  const mensagemNãoValidar = `O segundo valor tem que ser maior que o primeiro!`;
  if (Number(valorB.value) > Number(valorA.value)) {
    const containerMensagemValidar = document.querySelector('.success');
    containerMensagemValidar.innerHTML = mensagemValidar;
    containerMensagemValidar.style.display = 'block';
    document.querySelector('.erro').style.display = 'none';
    valorA.value = '';
    valorB.value = '';
  } else {
    const containerMensagemNaoValidar = document.querySelector('.erro');
    containerMensagemNaoValidar.innerHTML = mensagemNãoValidar;
    containerMensagemNaoValidar.style.display = 'block';
    document.querySelector('.success').style.display = 'none';
    valorA.value = '';
    valorB.value = '';
  }
});


