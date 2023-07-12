import express from 'express'
import { Op } from 'sequelize'
import { sequelize } from './db/db.js'
import { Profesor } from './models/Profesor.js'
import cors from 'cors'
import bodyParser from 'body-parser'


// const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false 
    })
)

app.use(bodyParser.json())

async function verifConnection() {
    console.log("VerifCon")
    try {
        await sequelize.authenticate()
        console.log('Succesful DB connection')
        await sequelize.sync({force: true})
    } catch(error) {
        console.error(error)
    }
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/profesor', async (req, res) => {
    const profesorId = req.query.id

    if(profesorId===undefined) {
        res.send(await Profesor.findAll())
        return
    }
    
    const profesores = await Profesor.findAll({
        where: {
            id: {
                [Op.eq] : profesorId
            }
        }
    })
    res.send(profesores)
})

app.get('/profesor/insert', async (req, res) => {
    const newProfesor = req.query
    const profesor = await Profesor.create(newProfesor)
    res.send("Profesor creado")
})

app.get('/profesor/delete', async (req, res) => {
    const profesorId = req.query.id

    const profesor = await Profesor.destroy({
        where: {
            id : userId
        }
    })
    res.send("Profe asesinado")
})

app.listen(PORT, () => {
    console.log(`Server funcionando en el puerto ${PORT}`)
    verifConnection()
})

