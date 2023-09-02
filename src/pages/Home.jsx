import React from 'react'
import FooterPokeball from '../components/layout/FooterPokeball'
import { loginTrainer } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value;
        dispatch(loginTrainer(nameTrainer));
        navigate("/pokedex")

    }
  return (
    <main>
        <section className="min-h-screen flex flex-col justify-around items-center bg-cover bg-center text-white">
              <article className="flex flex-col justify-center items-center gap-2 p-2 py-2 rounded-md">
                <div>
                    <img src="/images/banner.png" alt="" />
                </div>
                <h2 className='text-red-600 text-2xl font-bold'>Hello trainer!</h2>
                <p className='text-[#302F2F] font-medium]'>To start give me your name</p>
                <form onSubmit={handleSubmit}>   
                    <input className='outline-none p-2 px-4 h-10 text-black border-gray border-[1px]'
                     autoComplete='off' placeholder='your name...' required id='nameTrainer' type="text" />
                    <button className=' bg-red-600 rounded-sm w-[90px] p-2'>start</button>
                </form>
                
              </article>   
        </section>
        <FooterPokeball />
    </main>
  )
}

export default Home
