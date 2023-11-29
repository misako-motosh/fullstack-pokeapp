import Pokemon from '../models/pokemon.model.js'

// const getPokemons = async (request, response) => {
//     try {
//         const pokemons = await Pokemon.find();
//         response.status(200).send({
//             message: 'List of pokemons',
//             data: pokemons
//         })
//     } catch (error) {
//         console.error(error)
//         response.send({message: error.message})
//     }
// }

const getPokemons = async (request, response) => {
    const { limit, offset } = request.query;
    
    const limitValue = parseInt(limit);
    const offsetValue = parseInt(offset)

    const pokemons = await Pokemon.find({})
    .skip(offsetValue)
    .limit(limitValue)
    .exec();

    if (pokemons.length > 0) {
        response.status(200).send({
            message: 'Pokemon with limit and offset',
            data: pokemons
        });
    } else {
        response.status(500).send({ message: 'Error fetching Pokemon page' });
    }
}



export default getPokemons;
