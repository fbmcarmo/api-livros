const {Users} = require('../models')

async function createUsers(req, res) {
    try {
        await Users.create(req.body)
        return res.status(201).send('Usuário cadastrado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}

async function deleteUsers(req, res) {
    try {
        await Users.delete(req.body)
        return res.status(201).send('Usuário cadastrado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}

async function updateUsers(req, res) {
    try {
        await Users.update(req.body)
        return res.status(201).send('Usuário atualizado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}

async function getUsers(req, res) {
    try {
        await Users.get(req.body)
        return res.status(201).send('Usuário encontrado')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}

async function getUsersById(req, res) {
    try {
        await Users.getById(req.body)
        return res.status(201).send('Usuário encontrado')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}
module.exports = {
    createUsers,
    updateUsers,
    deleteUsers,
    getUsers,
    getUsersById  
}