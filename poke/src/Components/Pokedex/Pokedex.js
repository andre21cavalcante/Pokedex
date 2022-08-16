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

    useEffect(() => {
        async function pokemonLista() {
            try{
                const response = await Api.get("pokemon/?offset=0&limit=807")
                setPokemon(response.data.results)
            }catch(e){
                console.log(e.error)
            }
        }
        pokemonLista()
    },[])


  return (
    <div>Pokedex</div>
  )
}

export default Pokedex