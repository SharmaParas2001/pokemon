import React from "react";
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="poki">
        <img
          className="img_poki"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div>
          <h2 className="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <div className="score">
            <span className="rounded-border">{pokemon.stats[1].base_stat}</span>
            <div className="blue">Attack</div>
          </div>
          <div className="score">
            <span className="rounded-border">{pokemon.stats[0].base_stat}</span>
            <div className="green">Defense</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
