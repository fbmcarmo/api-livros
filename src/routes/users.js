const express = require('express')
const router = express.Router()
const usersMiddlewares = require('../middlewares/users')
const usersController = require('../controllers/users')
const authMiddleware = require('../middlewares/auth')

router.post('/users', usersMiddlewares.validateCreateUsers, usersController.createUsers)

router.get('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateGetUsersById, usersController.getUsersById)

router.get('/users', authMiddleware.validateToken, usersMiddlewares.validateGetUsers, usersController.getUsers)

router.delete('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateDeleteUsers, usersController.deleteUsers)

router.put('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateUpdateUsers, usersController.updateUsers)



module.exports = router;