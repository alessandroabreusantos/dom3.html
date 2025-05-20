function imc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")
 
    if (nome !== '' && altura !== '' && peso !== '') {
 
        const valorIMC = (peso / (altura * altura)).toFixed(1)
 
        if (valorIMC < 18.5) {
            tipoIMC = 'Abaixo do peso'
        } else if (valorIMC < 25) {
            tipoIMC = 'Peso ideal'
        } else if (valorIMC < 30) {
            tipoIMC = 'Um pouco acima do peso'
        } else if (valorIMC < 35) {
            tipoIMC = 'Obesidade grau 1'
        } else if (valorIMC < 40) {
            tipoIMC = 'Obesidade grau 2'
        } else {
            tipoIMC = 'Obesidade grau 3'
        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${tipoIMC}`
 
    } else {
        resultado.innerHTML = "Preencha todos os campos"
    }
 
}