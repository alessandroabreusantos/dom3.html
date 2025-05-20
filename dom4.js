function verificaPalavra() {
    const palavra = document.getElementById('palavra').value.toLowerCase()
    const palavracorreta = "festa junina"

    if (palavra == palavracorreta) {
        window.location.href = "correto.html"
    } else {
        window.location.href = "erro.html"
    }

}