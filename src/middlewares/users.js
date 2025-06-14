const{ Users } = require('../models');
const bcrypt = require('bcrypt')

async function validateCreateUsers(req, res, next){
    const {nome, email, password} = req.body

    if(!nome || !email || !password){
        return res.status(400).send({
            error: 'Todos os campos são obrigatórios!'
        })
    }
    
    if(nome.length > 255){
        return res.status(400).send({
            error: 'O nome não pode ter mais que 255 caracteres'
        })
    }

    if(email.length > 255){
        return res.status(400).send({
            error: 'O email não pode ter mais que 255 caracteres'
        })
    }

    const existingUser = await Users.findOne({         
        where: {                               
            email: email
        }
    })   

    if(existingUser){
        return res.status(400).send({
            error: 'Email já cadastrado.'
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10) 

    req.body.password = hashedPassword  

    next()
}

function validateDeleteUsers(req, res, next){
    const { id } = req.params;

    if(!id){
        return res.status(400).send('ID do usuário é obrigatório')
    }

    next();
}

function validateGetUsersById(req, res, next){
    const { id } = req.params;

    if(!id){
        return res.status(400).send('ID do usuário é obrigatório')
    }

    next();
}


async function validateUpdateUsers(req, res, next){
    const {nome, email, password} = req.body

    if(!nome || !email || !password){
        return res.status(400).send({
            error: 'Todos os campos são obrigatórios para atualização!'
        })
    }
    
    if(nome.length > 255){
        return res.status(400).send({
            error: 'O nome não pode ter mais que 255 caracteres'
        })
    }

    if(email.length > 255){
        return res.status(400).send({
            error: 'O email não pode ter mais que 255 caracteres'
        })
    }

    const existingUser = await Users.findOne({         
        where: {                               
            email: email
        }
    }) 
    next();
}

function validateGetUsers(req, res, next){
    const { id } = req.params;

    if(!id){
        return res.status(400).send('ID do usuário é obrigatório')
    }

    next();
}

module.exports = {
    validateCreateUsers,
    validateDeleteUsers,
    validateGetUsersById,
    validateUpdateUsers,
    validateGetUsers
}