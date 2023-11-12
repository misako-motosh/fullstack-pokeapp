import { useState } from 'react';

function ButtonLoadMorePokemon({ onPokemonLoad }) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const offset = currentPage * itemsPerPage;

    const loadMorePokemon = async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`);
            
            if (response.ok) {
                setCurrentPage(currentPage + 1);
                onPokemonLoad(offset + itemsPerPage);
            } else {
                console.error('Error fetching data:');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <button onClick={loadMorePokemon} className="load-more-button">Load More</button>
        </div>
    )
}

export default ButtonLoadMorePokemon;
