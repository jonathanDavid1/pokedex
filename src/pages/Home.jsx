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
        <section className='min-h-screen grid  grid-rows-[1fr_auto'>

              <article>
                <div>
                    <img src="/images/banner.png" alt="" />
                </div>
                <h2>Hello trainer!</h2>
                <p>To start give me your name</p>
                <form onSubmit={handleSubmit}>   
                    <input autoComplete='off' placeholder='your name...' required id='nameTrainer' type="text" />
                    <button></button>
                </form>
                
              </article>   
        </section>
        <FooterPokeball />
    </main>
  )
}

export default Home
