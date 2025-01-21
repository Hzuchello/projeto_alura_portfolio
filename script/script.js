// Seleciona o formulário pelo ID
const formulario = document.getElementById('meuFormulario');

// Adiciona um evento de envio (submit) ao formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Exibe os valores no console (ou processa de outra forma)
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);

    // Exemplo: Mostrar uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
});
