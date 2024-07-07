import React from "react";
import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
