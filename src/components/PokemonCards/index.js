import React from 'react'
import { useEffect, useState } from 'react'

function PokemonCards({ name, src }) {
  // useEffect(() => {
  //   const getOne = async () => {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     console.log('data', data)
  //     setPokemonCards(data.id)
  //     console.log('data id', data.id)
  //     setPokemonName(data.name)
  //   }
  //   getThemAll()
  // }, [id, name])

  // const eachPokemon = pokemonCards.map((x) => <div>
  //     <img
  //       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.id}.png`}
  //       alt='pokemonCards'
  //     />
  //     <h4 style={{ textTransform: 'capitalize' }}>{x.name}</h4>
  //     <h6 style={{ color: 'red' }}> Pokemon #{x.id} </h6>
  //     </div>

  // const createCard = (id) => {
  //   return (
  //     <main>
  //       <img
  //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
  //         alt='pokemon'
  //       />

  //       <div className='info'>
  //         <span className='number'>#{id}</span>
  //         <h3 className='name'>${name}</h3>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <div>
      <img src={src} alt='pokemonCards' />
      <h4 style={{ textTransform: 'capitalize' }}>{name}</h4>
      <h6 style={{ color: 'red' }}> Pokemon #{name} </h6>
    </div>
  )
}

export default PokemonCards
