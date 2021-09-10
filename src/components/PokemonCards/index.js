import React from 'react'
import { useEffect, useState } from 'react'

function PokemonCards({ id, name }) {
  const [pokemonCards, setPokemonCards] = useState('')
  const [pokemonName, setPokemonName] = useState()

  useEffect(() => {
    const getThemAll = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const res = await fetch(url)
      const data = await res.json()
      console.log('data', data)
      setPokemonCards(data.id)
      console.log('data id', data.id)
      setPokemonName(data.name)
    }
    getThemAll()
  }, [id, name])

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt='pokemonCards'
      />
      <h4 style={{ textTransform: 'capitalize' }}>{pokemonName}</h4>
      <h6 style={{ color: 'red' }}> Pokemon #{id} </h6>
    </div>
  )
}

export default PokemonCards
