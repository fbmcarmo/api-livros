const { Livros } = require('../models')

async function getLivros(req, res) {
    try {
        const livros = await Livros.findAll()

        return res.send(livros)
        
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar livros')
    }
}

async function createLivro(req, res) {
    try {
        const livro = await Livros.create(req.body)

        return res.status(201).send(livro)
        
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar livro')
    }
}

async function deleteLivro(req, res){
    const { id } = req.params;
    try {
        await Livros.destroy({
            where: {
                id: id
            }
        })

        return res.status(202).send('Livro deletado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar livro')
    }
}

module.exports = {
    getLivros,
    createLivro,
    deleteLivro
}