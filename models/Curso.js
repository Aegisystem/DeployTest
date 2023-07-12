import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'

export const Curso = sequelize.define(
    'Curso', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seccion: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        numero_vacantes: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    }
)