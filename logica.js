// Função para converter o valor inserido
function converter(){
    // Pegando o valor inserido pelo usuário
    const valor = document.getElementById("valor").value
    // Pegando a moeda escolhida pelo usuário
    const moeda = document.getElementById("moeda").value
    // Taxas de conversão
    const taxas = {
        "USD": 0.17,
        "EUR": 0.16,
        "GBP": 0.14
    }
    if(valor && !isNaN(valor)){
        const convertido = valor*taxas[moeda]
        document.getElementById("resultado").innerHTML = `O valor convertido é: ${convertido.toFixed(2)} ${moeda}`
    } else{
        // Se o valor for inválido, exibirá uma mensagem de erro
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido."
    }
function limpar(){
    document.getElementById('valor').value=" "; // Limpa o campo
}
}
