import { describe, it, expect, vi } from "vitest";
import { fetchPokemon } from "./fetchPokemon";

interface Pokemon {
  name: string;
}

global.fetch = vi.fn();

function createFetchResponse(data: Pokemon) {
  return { json: () => Promise.resolve(data) };
}

describe("fetchPokemon", () => {
  it("returns the correct pokemon data", async () => {
    const pokemonData = {
      name: "pikachu",
    };

    (fetch as jest.Mock).mockResolvedValue(createFetchResponse(pokemonData));

    const result = await fetchPokemon("pikachu");

    expect(fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    expect(result.name).toBe("pikachu");
  });
});
