import  Sequelize  from "sequelize"
import {connection} from '../database/connection.js'

export const biblioteca = connection.define('biblioteca', {
    id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    createdAt:false,
    updatedAt:false,
    timestamps:false

})
