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

async function getLivroById(req, res) {
    const { id } = req.params;

    try {
        const livro = await Livros.findByPk(id);

        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }

        return res.send(livro);

    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao buscar livro');
    }
}

async function createLivro(req, res) {
    try {
        const userId = req.user.id;  
        const livroData = { ...req.body, userId };

        const livro = await Livros.create(livroData)

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

async function updateLivro(req, res) {
    const { id } = req.params;

    try {
        const [updated] = await Livros.update(req.body, {
            where: { id: id }
        });

        if (!updated) {
            return res.status(404).send('Livro não encontrado');
        }

        const livroAtualizado = await Livros.findByPk(id);
        return res.send(livroAtualizado);
        
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao atualizar livro');
    }
}

async function getMeusLivros(req, res) {
  try {
    const userId = req.user.id;
    const meusLivros = await Livros.findAll({
      where: { userId },
    });

    return res.send(meusLivros);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Erro ao buscar seus livros');
  }
}


module.exports = {
    getLivros,
    getLivroById,
    createLivro,
    deleteLivro,
    updateLivro,
    getMeusLivros
}