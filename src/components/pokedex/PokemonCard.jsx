import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'

const PokemonCard = ( {pokemonUrl} ) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        getPokemonByUrl(pokemonUrl)
        .then((data) => setPokemonInfo(data))
        .catch((err) => console.log(err))
    }, [])
    
  return (
    <article>
        pokemon card
      
    </article>
  )
}

export default PokemonCard;
