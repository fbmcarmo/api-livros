const express = require('express')
const router = express.Router()
const livrosController = require('../controllers/livros')
const livrosMiddleware = require('../middlewares/livros')
const authMiddleware = require('../middlewares/auth')

router.get(
    '/livros', 
    authMiddleware.validateToken,
    livrosController.getLivros
)
router.post(
    '/livros',
    authMiddleware.validateToken,
    livrosMiddleware.validateCreateLivro,
    livrosController.createLivro
)
router.delete(
    '/livros/:id',
    authMiddleware.validateToken,
    livrosMiddleware.validateDeleteLivro,
    livrosController.deleteLivro
)

module.exports = router;