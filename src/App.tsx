import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { fetchPokemon } from "./services/fetchPokemon.ts";
import { Pokemon } from "./types.ts";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [fetchError, setFetchError] = useState(false);

  const fetchPokemonData = async (name: string) => {
    try {
      const pokemonData = await fetchPokemon(name);
      setFetchError(false);
      setCurrentPokemon(pokemonData);
    } catch (error) {
      setFetchError(true);
      setCurrentPokemon(null);
    }
  };

  return (
    <main className="app">
      <h1>Hello Pokeapp!</h1>
      <SearchBar onSearchSubmit={fetchPokemonData} />
      {fetchError && (
        <img src="/dittochu.png" style={{ height: "300px", width: "auto" }} />
      )}
      {!fetchError && (
        <img
          src={currentPokemon?.sprites.other["official-artwork"].front_default}
          style={{ height: "300px", width: "auto" }}
        />
      )}
    </main>
  );
}

export default App;
