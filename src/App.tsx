import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { fetchPokemon } from "./services/fetchPokemon.ts";
import { PokemonType } from "./types.ts";
import { Pokemon } from "./components/Pokemon.tsx";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonType | null>(
    null
  );
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
      <SearchBar onSearchSubmit={fetchPokemonData} />
      {fetchError && (
        <img src="/dittochu.png" style={{ height: "300px", width: "auto" }} />
      )}
      {!fetchError && <Pokemon pokemonData={currentPokemon} />}
    </main>
  );
}

export default App;
