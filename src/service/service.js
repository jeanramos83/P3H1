function CalculaRCQ(cintura, quadril){
    return parseFloat(cintura) / parseFloat(quadril)
}

function classificacaoRCQ(RCQ, sexo){
    if(sexo == 'M'){
        if(RCQ < 0.95){
            return 'Baixo'
        }
        else if(RCQ >= 0.96 && RCQ <= 1.0){
            return 'Moderado'
        }
        else{
            return 'Alto'
        }
    }
    else if(sexo == 'F'){
        if(RCQ < 0.80){
            return 'Baixo'
        }
        else if(RCQ >= 0.81 && RCQ <= 0.85){
            return 'Moderado'
        }
        else{
            return 'Alto'
        }
    }
    else{
        return 'Sexo desconhecido'
    }
}

module.exports = {
    CalculaRCQ,
    classificacaoRCQ
}