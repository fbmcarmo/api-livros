const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Users = require('./users');

const Livros = sequelize.define('Livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    banner: {
        type: DataTypes.TEXT,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  tableName: 'Livros',
  timestamps: false,
})

Livros.belongsTo(Users, { foreignKey: 'userId', as: 'usuario' });
Users.hasMany(Livros, { foreignKey: 'userId', as: 'livros' });

module.exports = Livros;