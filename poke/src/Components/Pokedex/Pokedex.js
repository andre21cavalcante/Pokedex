import React, {useEffect, useState} from 'react'
import { Api } from '../../Services/Api'
import {pokeId, idGet} from "../../Services/ConfigId"

const Pokedex = () => {

    const [pokemon, setPokemon] = useState ([])
    const [id, setId] = useState ("")
    const [umPokemon, setUm] = useState({
        id: "",
        name: "",
        spritesfront_default: '',
        typestypename: '',
        stats: []
        
    })


  return (
    <div>Pokedex</div>
  )
}

export default Pokedex