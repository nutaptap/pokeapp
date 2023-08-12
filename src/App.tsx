import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { fetchPokemon } from "./services/fetchPokemon.ts";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState("pikachu");

  const fetchPokemonName = (name: string) => {
    setCurrentPokemon(fetchPokemon(name));
  };

  return (
    <main className="app">
      <h1>Hello Pokeapp!</h1>
      <SearchBar onSearchSubmit={fetchPokemonName} />
      {currentPokemon && <span>{currentPokemon}</span>}
    </main>
  );
}

export default App;
