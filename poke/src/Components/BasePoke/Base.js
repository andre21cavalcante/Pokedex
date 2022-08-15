import React from 'react'
import PokedexB from "../../Assets/pokedex_andre_baixo.png"
import PokedexC from "../../Assets/pokedex_andre_cima.png"

const Base = () => {
  return (
    <div>
        <img src={PokedexC} alt="pokedex parte de cima"/> 
        <img src={PokedexB} alt= "pokedex parte de baixo"/>
    </div>
  )
}

export default Base