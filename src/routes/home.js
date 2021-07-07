const { Router, request } = require("express");
const service = require('../service/service')
const { validate } = require('../validators/validators')
const { FormValidation } = require('../validators/validator')
 
const router = Router();

router.post('/CalculaRCQ',FormValidation(), validate, async (req, res) =>{
    const { nome, tamanho, cintura, quadril, sexo } = req.body;
    const RCQ = service.CalculaRCQ(cintura, quadril);
    const retorno = {
        nome: nome,
        valor: RCQ,
        classificacao: service.classificacaoRCQ(RCQ, sexo)
    }
    return res.json(retorno);
});

module.exports = [
    router
]
