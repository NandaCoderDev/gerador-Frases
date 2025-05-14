import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite no seu potencial, você é mais forte do que imagina.",
        "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
        "Você nunca saberá o quão longe pode chegar até tentar.",
        "Desafios são oportunidades disfarçadas.",
        "Mesmo que pareça difícil, continue — você está evoluindo.",
        "Grandes jornadas começam com um simples passo."
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia! Que o hoje seja melhor que o ontem e o início de grandes conquistas.",
        "Comece o dia com um sorriso e pensamentos positivos. O resto se ajeita.",
        "Cada amanhecer é uma nova chance de recomeçar. Bom dia!",
        "Acorde com gratidão, viva com propósito. Tenha um ótimo dia!",
        "Bom dia! Que não falte fé, coragem e vontade de vencer.",
        "Hoje é um presente. Aproveite cada momento com alegria. Bom dia!"
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img
        alt="Logo frases"
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categoria</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: ' #1fa4db'
            }}

            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}

      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='textofrase'>{textoFrase}</p>}

    </div>
  )
}

export default App