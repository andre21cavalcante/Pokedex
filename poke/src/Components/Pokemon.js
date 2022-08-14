import React, { useState, useEffect} from 'react';
import { Api } from './Services/Api';
import * as S from "./Pokemon.js"

const Pokemon = () =>{
    const [pokemon, setPokemon] = useState([]);

    const [select, setSelect] = useState("");

    useEffect(() =>{
        Api.get("").then((response) => {
            setPokemon(response.data);
            console.log(response.data);
        });
    }, []);

  return (
    <S.Main>
        <div>
        
        </div>
    </S.Main>
  )
}

export default Pokemon