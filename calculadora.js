

function valorFuturoCapital(meses, taxadejuros, capitalInicial){
    return ( 1 + taxadejuros)**meses * capitalInicial
}

function calcularFinanciamentoComPrestacoes(taxadejuros, meses, valorPrestacao){
    return ( 1 - ( 1 + taxadejuros)**-meses) / taxadejuros * valorPrestacao
}

function calcularAplicacaoDepositosRegulares(taxadejuros, meses, depositoRegular){
    return ( 1 + taxadejuros) * (( 1 + taxadejuros )**meses - 1) /  taxadejuros * depositoRegular
}

function principal(){
    let meses = 12
    let taxadejuros = 12 / 100


    let depositoRegular = 500 // para depósito regular
    let valorPrestacao = 500 // para prestação com depósitos regulares
    let capitalInicial = 1500 // para futuro capital


    let resultado = 0
    let tipo = `Financiamento com prestações`
    
    if(tipo === `Depósito Regular`){
        resultado = calcularAplicacaoDepositosRegulares(taxadejuros, meses, depositoRegular)
        console.log(`${resultado.toFixed(2)}`)
    }else if(tipo === `Financiamento com prestações`){
        resultado = calcularFinanciamentoComPrestacoes(taxadejuros, meses, valorPrestacao)
        console.log(`${resultado.toFixed(2)}`)
    }else if(tipo === `Valor futuro de capital`){
        resultado = valorFuturoCapital(meses, taxadejuros, capitalInicial)
        console.log(`${resultado.toFixed(2)}`)
    }else{
        console.log(`Tipo inválido!`)
    }


}


principal()