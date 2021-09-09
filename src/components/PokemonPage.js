import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState('')


  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then(resp => resp.json())
      .then(pokemonArr => setPokemon(pokemonArr))
  }, [])

  function addPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }

  let filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon.reverse()}/>
    </Container>
  );
}

export default PokemonPage;
