const camposFormulario = document.querySelector('.formulario'); // Procura na página um elemento com a classe .formulario (que provavelmente é o <form>) e guarda esse elemento na variável camposFormulario.


const campos = camposFormulario.querySelectorAll('input, textarea'); // Dentro do formulario, pega todos os campos <input> e <textarea> e guarda na variável campos. Ou seja, campos é uma lista de campos que o usuário vai preencher.

camposFormulario.addEventListener('submit', function (e) { //Quando a pessoa clicar no botão de enviar (submit) do formulário, essa função vai ser chamada.
    e.preventDefault(); // Impede que o formulário seja enviado de verdade. Assim, o JavaScript pode primeiro verificar se os campos estão preenchidos

    campos.forEach(campo => { // Para cada campo (input ou textarea) na lista campos, vai executar a função abaixo.

        const mensagemErro = campo.nextElementSibling; // Pega o próximo elemento que vem logo depois do campo no HTML. Esse próximo elemento é onde vai aparecer a mensagem de erro.

        if (campo.value.trim() === '') { // Verifica se o campo está vazio (sem nada, nem espaço).
            campo.classList.add('nao-preenchido'); // Adiciona a classe nao-preenchido no campo, talvez para mudar a cor ou a borda, mostrando que está vazio.
            mensagemErro.style.display = 'block'; // Faz a mensagem de erro aparecer.
        } else {
            campo.classList.add('preenchido'); // Adiciona a classe preenchido ao campo, talvez para indicar visualmente que ele está certo.
            campo.classList.remove('nao-preenchido'); // Tira a classe nao-preenchido caso ela tenha sido colocada antes.
            mensagemErro.style.display = 'none'; // Esconde a mensagem de erro, porque o campo está preenchido.
        }
    })
})

/* ✅ Resumo:
Esse código impede que o formulário seja enviado sem que todos os campos estejam preenchidos, e ainda mostra ou esconde mensagens de erro conforme o usuário preenche ou deixa vazio. */