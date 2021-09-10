import React, { useState, useEffect } from 'react'
import PokemonCards from '../PokemonCards/index'
import '../../index.css'

function App() {
  const [id, setId] = useState()
  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const response = await fetch(url)
      const data = await response.json()
      // console.log('this is data', data)
      setPokemonCards(() => {
        const newState = [
          ...pokemonCards,
          {
            name: data.name,
            img: data.sprites.front_default,
            id: data.id,
          },
        ]
        return newState
      })
    }
    getPokemon()
  }, [id])

  function handleClick() {
    const randomId = Math.ceil(Math.random() * 850)
    setId(randomId)
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Get them
      </button>
      <div className='poke-dex'>
        {pokemonCards.map((pokemon) => (
          <PokemonCards id={pokemon.id} name={pokemon.name} src={pokemon.img} />
        ))}
      </div>
    </div>
  )
}

export default App
