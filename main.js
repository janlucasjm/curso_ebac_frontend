const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    let formValido = false;
    e.preventDefault();
    
    let campoA = document.getElementById('campoa');
    let campoB = document.getElementById('campob');
    let validacao = document.getElementById('validacao');

    formValido = (campoB.value > campoA.value);
    if (formValido) {
        validacao.textContent = "Sucesso";
        validacao.style.color = "green";

        document.getElementById('validacao').innerHTML = 'Sucesso';
        return true;
    } else {
        validacao.textContent = "O número do campo B deve ser maior que o número do campo A.";
        validacao.style.color = "red";
        return false;
    }
})
