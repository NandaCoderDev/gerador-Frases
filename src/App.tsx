import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {


  return (
    <div className='container'>
      <img
        alt="Logo frase"
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categoria</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar frases</button>

      <p className='textofrase'>Alguma frase vai vir aqui</p>

    </div>
  )
}

export default App