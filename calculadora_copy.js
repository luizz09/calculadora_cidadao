let resposta = document.getElementById(`resposta`)

function valorFuturoCapital(meses, taxadejuros, valor){
    return ( 1 + taxadejuros)**meses * valor
}

function calcularFinanciamentoComPrestacoes(taxadejuros, meses, valor){
    return ( 1 - ( 1 + taxadejuros)**-meses) / taxadejuros * valor
}

function calcularAplicacaoDepositosRegulares(taxadejuros, meses, valor){
    return ( 1 + taxadejuros) * (( 1 + taxadejuros )**meses - 1) /  taxadejuros * valor
}

function principal(){
    let meses = Number(document.getElementById(`meses`).value)
    let taxadejuros = Number(document.getElementById(`taxadejuros`).value) / 100

    let valor = Number(document.getElementById(`valor`).value)


    let resultado = 0
    let tipo = document.getElementById(`tipo`).value
    
    resposta.innerHTML = ``

    if(tipo === `Aplicação com depósitos regulares`){
        resultado = calcularAplicacaoDepositosRegulares(taxadejuros, meses, valor)
        resposta.innerHTML += `O valor obtido ao final foi de: R$${resultado.toFixed(2)}`
    }else if(tipo === `Financiamento com prestações fixas`){
        resultado = calcularFinanciamentoComPrestacoes(taxadejuros, meses, valor)
        resposta.innerHTML += `O valor financiado foi de: R$${resultado.toFixed(2)} <br>`
        resposta.innerHTML += `<small>(O valor financiado não inclui o valor da entrada)</small>`
    }else if(tipo === `Valor futuro de capital`){
        resultado = valorFuturoCapital(meses, taxadejuros, valor)
        resposta.innerHTML += `O valor obtido ao final foi de: R$${resultado.toFixed(2)}`   
    }else{
        console.log(`Tipo inválido!`)
        resposta.innerHTML += `Escolha algum tipo!`
    }


}


