import React from 'react'
import { useEffect, useState } from 'react'

function PokemonCards({ name, src, id }) {
  return (
    <main>
      <div className='poke-dex'>
        <div className='poke-card'>
          <div className='img-container'>
            <img src={src} alt='Pokemon' />
          </div>
          <div className='info'>
            <span>Pokemon #{id}</span>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PokemonCards
