import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDatabase from './config/database.js'

const app = express()
const baseUrl = '/api/v1'
const PORT = 8080;

dotenv.config()
connectDatabase()

app.use(express.json())
app.use(cors())

import pokemons from '../server/routes/pokemon.router.js'
app.use(`${baseUrl}/pokemons`, pokemons)

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`))