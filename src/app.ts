import express from 'express'
import {TipoAnimal} from './tipoAnimal.js'

const app = express()

const tipoAnimal = [
  new TipoAnimal(
    'Perro',
    12
  ),
]

app.get('/api/tipoAnimal',(req, res) => {
    res.json(tipoAnimal)
})

app.use('/',(req, res) => {
    res.send('Hello, world!')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/')
})
