const { body, validationResult } = require("express-validator");

const FormValidation = () =>{
    let errors = [
        body("nome").notEmpty().withMessage("Nome não enviado"),
        body("tamanho").isFloat({min: 1}).withMessage("Valor não pode ser 0"),
        body("cintura").isFloat({min: 1}).withMessage("Valor não pode ser 0"),
        body("quadril").isFloat({min: 1}).withMessage("Valor não pode ser 0"),
        body("sexo").custom((value)=>{
            if(value == 'F' || value == 'M'){
                return true;
            }
            else{
                throw new Error
            }
        }).withMessage('Opção de sexo inválida')
    ]
    return errors 
}

module.exports = {
    FormValidation
};


