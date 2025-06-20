const sequelize = require('../config/database')
const Users = require('./users')
const Livros = require('./livros')

sequelize.sync({alter: true})
    .then(() => console.log('Tabelas sincronizadas com sucesso'))
    .catch((error) => console.error(
        'Erro ao sincronizar tabelas', error
    ))

Livros.belongsTo(Users, { foreignKey: 'userId', as: 'usuario' });
Users.hasMany(Livros, { foreignKey: 'userId', as: 'livros' });    

    module.exports = {
        Users,
        Livros,
    }