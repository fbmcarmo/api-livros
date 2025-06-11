function validateCreateLivro(req, res, next){
    const { banner, titulo, estado, autor, preco, categoria, descricao } = req.body;

    if(!banner || !titulo || !estado || !autor ||!preco ||!categoria ||!descricao){
        return res. status(400).send('Todos os campos são obrigatórios')
    }

    if(titulo.length > 100){
        return res.status(400).send('O nome do livro não pode ter mais de 100 caracteres')
    }

    if(categoria.length > 50){
        return res.status(400).send('Categoria não pode ter mais de 50 caracteres')
    }

    next();
}

function validateDeleteLivro(req, res, next){
    const { id } = req.params;

    if(!id){
        return res.status(400).send('ID do livro é obrigatório')
    }

    next();
}

module.exports = {
    validateCreateLivro,
    validateDeleteLivro
}