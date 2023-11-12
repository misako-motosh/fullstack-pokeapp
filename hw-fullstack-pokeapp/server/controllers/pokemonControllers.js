import Pokemon from '../models/pokemon.js'

const getPokemons = async (request, response) => {
    try {
        const pokemons = await Pokemon.find();
        response.status(200).send({
            message: 'List of pokemons',
            data: pokemons
        })
    } catch (error) {
        console.error(error)
        response.send({message: error.message})
    }
}

export default getPokemons;
