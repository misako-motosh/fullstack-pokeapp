import { Router } from 'express'
import getPokemons from '../controllers/pokemonControllers.js'

const router = Router()

router.route('/pokemons').get(getPokemons)

export default router