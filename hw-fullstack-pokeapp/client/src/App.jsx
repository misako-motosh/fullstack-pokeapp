import { useEffect, useState } from 'react';
import './App.css';
import ButtonLoadMorePokemon from '../components/ButtonLoadMorePokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        if (!initialLoad) {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}?limit=20&offset=${offset}`, {
              method: 'GET',
              headers: {'Content-Type': 'application/json'},
            });

          if (response.ok) {
            const data = await response.json();
            console.log('Received data:', data);
            const pokemonList = await data;
            console.log('Pokemon list:', pokemonList);

            const pokemonDetails = await Promise.all(
              pokemonList.map(async (pokemon) => {
                console.log('Processing pokemon:', pokemonData);
                const response1 = await fetch(pokemon);
                if (response1.ok) {
                  return response1.json();
                } else {
                  throw new Error('Failed to fetch details');
                }
              })
            );

            setPokemons((prevPokemons) => [...prevPokemons, ...pokemonDetails]);
          } else {
            throw new Error('Failed to fetch data');
          }
        } else {
          setInitialLoad(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    fetchPokemons();
  }, [offset, initialLoad]);

  return (
    <div className="pokedex-page">
      <h1>Pokedex</h1>
      <div className="pokemon-cards">
        <div className="pokemon-card-container">
        {pokemons.map((pokemon, index) => (
            <div className="pokemon-card" key={index}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                height="120"
                width="120"
              />
              <h3>{pokemon.name}</h3>
              <p>Type: {pokemon.types && pokemon.types[0] && pokemon.types[0].type.name}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonLoadMorePokemon onPokemonLoad={setOffset} />
    </div>
  );
}

export default App;
