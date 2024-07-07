import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import PokemonList from "./PokemonList";
import "../styles/Api.css";

const Url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const CallApi = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(24);

  const fetchPokemonData = async () => {
    const res = await fetch(Url);
    const data = await res.json();

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    };

    createPokemonObject(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  // Get current pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Pokémon List</h1>
        <PokemonList pokemons={currentPokemons} />
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{`Page ${currentPage}`}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastPokemon >= allPokemons.length}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallApi;
