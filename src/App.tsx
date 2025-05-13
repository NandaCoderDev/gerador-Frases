import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {


  return (
    <div>
      <img
        alt="Logo frases"
        src={logoImg}
      />

      <h2 className='title'>Categoria</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar frases</button>

      <h2 className='textoFrase'>Alguma frase vai vir aqui</h2>

    </div>
  )
}

export default App