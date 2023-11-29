import { useState } from 'react';

function ButtonLoadMorePokemon({ onPokemonLoad }) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const offset = currentPage * itemsPerPage;

    const loadMorePokemon = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}?limit=${itemsPerPage}&offset=${offset}`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                });
            
            if (response.ok) {
                setCurrentPage(currentPage + 1);
                onPokemonLoad(offset + itemsPerPage);
            } else {
                console.error('Error fetching data');
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
