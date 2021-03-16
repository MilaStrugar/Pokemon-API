import React, { useState } from 'react';
import axios from 'axios';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807") //PROMISE
            .then(pokemonData => {
                console.log("Loading Pokemon")
                console.log(pokemonData)
                console.log("****************")
                console.log(pokemonData.data.results)
                setPokemon(pokemonData.data.results)
                //.CATCH is a function that is getting errors
            }).
            catch(err => {
                console.log(err)
            });
    }
    return (
        <div>
            <button onClick={fetchPokemon} className="btn btn-dark">Fetch Pokemon</button>
            {pokemon.map((pokemonOne, i) => {
                return <div key={i}>{pokemonOne.name}</div>
            })}
        </div>
    );
};

export default Pokemon;