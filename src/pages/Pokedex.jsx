import React, { useEffect, useState } from 'react'
import PokemonList from '../components/pokedex/PokemonList';
import usePodedex from '../hooks/usePokedex';
import usePokedex from '../hooks/usePokedex';

const Pokedex = () => {

  const { 
    name, 
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType, 
    handleChange,
    pokemonsByName
  } = usePokedex();

  return (
    <main>
      <section>
        <p><span>welcome {name}</span></p>
        <form>
          <div>
            <input 
            value={pokemonName}
            onChange={handleChange(setPokemonName)}
            placeholder='Search pokemon...' type="text" />
            {/* <button>Search</button> */}
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option>All pokemons</option>
            <option value="rock">Rock</option>
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  )
}

export default Pokedex
