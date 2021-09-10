import React, { useState, useEffect } from 'react'

import PokemonCards from '../PokemonCards/index'

function App() {
  const [id, setId] = useState(1)

  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const response = await fetch(url)
      const data = await response.json()
      console.log('this is data', data.name)
      console.log('data', data)

      // setPokemonCards(...data, )
      // const newState = [...pokemonCards, data]
      setPokemonCards(() => {
        const newState = [...pokemonCards, { name: data.name, img: data.img }]
        return newState

        // console.log('newstate', newState)
      })
      // console.log('newstate', newState)

      // console.log('pokemon name is', data.name)
    }
    getPokemon()
  }, [id])

  function handleClick() {
    const randomId = Math.ceil(Math.random() * 850)
    setId(randomId)
  }

  // const fetchPokemons = async () => {
  //   for (let i = 1; i <= count; i++) {
  //     await getThemAll(i)
  //   }
  // }

  return (
    <div className='App'>
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Get them all
      </button>
      <ul>
        {pokemonCards.map((pokemon) => (
          <PokemonCards id={pokemon.id} name={pokemon.name} src={pokemon.img} />
        ))}
      </ul>

      {/* <button onClick={PokemonCards}>Gotta catch em all</button> */}
    </div>
  )
}

export default App
