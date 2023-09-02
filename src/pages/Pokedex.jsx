import React, { useEffect, useState } from 'react'
import PokemonList from '../components/pokedex/PokemonList';
import usePokedex from '../hooks/usePokedex';
import { paginateData } from '../utils/pagination';
import Pagination from '../components/pokedex/Pagination';

const Pokedex = () => {

  const [currentPage, setCurrentPage] = useState(1)

    const { name,
        pokemonName,
        handleChange,
        setPokemonName,
        pokemonType,
        setPokemonType,
        pokemonByName,
        types
    } = usePokedex()

    const { itemsInCurrentPage,
        lastPages,
        pagesInCurrentBlock
    } = paginateData(pokemonByName, currentPage)

  return (
    <main>
      <section>
        <div className="h-16 bg-red-600"></div>

        <div className="h-16 bg-black relative">
          <div className='absolute -top-10 left-6'>
            <img className='h-[50px] w-[300px]'
            src="/images/banner.png" alt=""/>
          </div>
          <div className='h-16 aspect-square rounded-full bg-white absolute right-0 -translate-x-1/2 -top-1 border-[10px] border-black after:block after:content-[""] after:aspect-square after::bg-slate-500 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[10px] after:border-black'>
          </div>
        </div>
      </section>

      <section className="text-center py-6 flex flex-col gap-4">
        <p className="text-lg font-bold text-red-600">Welcome <span className="text-lg font-Montse font-bold text-red-600 capitalize">{name}</span></p>
        <form className="flex flex-col min-[500px]:flex-row justify-center items-center gap-2">
          <div>
            <input className="rounded-full p-2 px-4 outline-none" value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="search pokemon..." type="text" />
          </div>

          <select className="rounded-full p-2 outline-none" value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemon</option>
            {
              types.map((type) => <option key={type.name} value={type.name} className="capitalize">{type.name}</option>)
            }
          </select>
        </form>
      </section>

      <Pagination lastPages={lastPages} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  )
}

export default Pokedex
