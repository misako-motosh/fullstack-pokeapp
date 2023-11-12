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
            `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
          );

          if (response.ok) {
            const data = await response.json();
            const pokemonList = data.results;

            const pokemonDetails = await Promise.all(
              pokemonList.map(async (pokemon) => {
                const response1 = await fetch(pokemon.url);
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
              <p>Type: {pokemon.types[0].type.name}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonLoadMorePokemon onPokemonLoad={setOffset} />
    </div>
  );
}

export default App;
