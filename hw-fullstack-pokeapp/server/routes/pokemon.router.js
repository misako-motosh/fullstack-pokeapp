import { Router } from 'express'
import getPokemons from '../controllers/pokemon.controller.js'

const router = Router()

router.route('/').get(getPokemons)

export default router