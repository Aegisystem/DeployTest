import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { Curso } from './Curso.js'

export const Profesor = sequelize.define(
    'Profesor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.STRING
        },
        nombres: {
            type: DataTypes.STRING
        },
        apellidos: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)
Profesor.hasMany(Curso, {
    foreignKey: "profesorId",
    sourceKey: "id"
})
Curso.belongsTo(Profesor, {
    foreignKey: "profesorId",
    targetKey: "id"
})