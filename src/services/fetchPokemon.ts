export async function fetchPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch pokemon data");
  }
  /* return name.toUpperCase(); */
}
