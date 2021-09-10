import React, { useState } from 'react'

import PokemonCards from '../PokemonCards/index'
const count = 500

function App() {
  const [id, setId] = useState()
  const [name, setName] = useState()

  function handleClick() {
    const randomId = Math.ceil(Math.random() * 950)
    setId(randomId)
  }

  // const fetchPokemons = async () => {
  //   for (let i = 1; i <= count; i++) {
  //     await getThemAll(i)
  //   }
  // }

  return (
    <div className='App'>
      <PokemonCards id={id} name={name} />
      <button onClick={handleClick}>Gotta catch em all</button>
    </div>
  )
}

export default App
