import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../services/pokemons';
import StatBarList from '../components/pokemonDetail/StatBarList';

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null)

  const {pokemonId} = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
    .then((data) => setPokemonData(data))
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <section>
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
    
    <main className='flex items-center justify-center mb-[20px]'>

      <article className='w-[min(100%,_400px)]'>
       <header>
        <div>
          <img src={pokemonData?.image} alt="" />
        </div>
       </header>
       <section>
        <span>#{pokemonData?.id}</span>
        <StatBarList stats={pokemonData?.stats} />
       </section>
      </article>
      
    </main>
    </section>
  )
}

export default PokemonDetail
