const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6579;
require('./src/models')
const livrosRoutes = require('./src/routes/livros')
//const usersRoutes = require('./src/routes/users')
//const authRoutes = require('./src/routes/auth')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(livrosRoutes)
//app.use(usersRoutes)
//app.use(authRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})