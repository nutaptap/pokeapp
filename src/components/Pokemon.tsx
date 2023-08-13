import { PokemonType } from "../types.ts";
import { formatHeight } from "../utils/formatHeight.ts";
import { formatWeight } from "../utils/formatWeight.ts";
import "../pokemon.css";
import { ProgressBar } from "./ProgressBar.tsx";
import { findMaxValue } from "../utils/findMaxValue.ts";

interface PokemonProps {
  pokemonData: PokemonType | null;
}

export function Pokemon({ pokemonData }: PokemonProps) {
  return (
    <article className="pokemon-card">
      <img
        src={pokemonData?.sprites.other["official-artwork"].front_default}
        alt={`Illustration of ${pokemonData?.name}`}
        style={{ height: "240px", width: "auto" }}
      />
      <section>
        <h3># {pokemonData?.id}</h3>
        <h2>{pokemonData?.name.toUpperCase()}</h2>
      </section>
      <section>
        <table>
          <tbody>
            <tr>
              <td>Height</td>
              <td>{pokemonData && formatHeight(pokemonData.height)}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{pokemonData && formatWeight(pokemonData.weight)}</td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td>
                {pokemonData?.abilities[0] && (
                  <span className={`ability ${pokemonData.types[0].type.name}`}>
                    {pokemonData.abilities[0].ability.name.toUpperCase()}
                  </span>
                )}
                {pokemonData?.abilities[1] && (
                  <span className={`ability ${pokemonData.types[0].type.name}`}>
                    {pokemonData.abilities[1].ability.name.toUpperCase()}
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                {pokemonData?.types[0] && (
                  <span className={`type ${pokemonData.types[0].type.name}`}>
                    <span>{pokemonData.types[0].type.name} </span>
                    <img
                      className="icon"
                      src={`/${pokemonData.types[0].type.name}.svg`}
                    />
                  </span>
                )}
                {pokemonData?.types[1] && (
                  <span className={`type ${pokemonData.types[1].type.name}`}>
                    <span>{pokemonData.types[1].type.name}</span>
                    <img
                      className="icon"
                      src={`/${pokemonData.types[1].type.name}.svg`}
                    />
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table>
          <tbody>
            {pokemonData?.stats.map((stat) => (
              <tr className="stat" key={stat.stat.name}>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
                <td>
                  <ProgressBar
                    currentValue={stat.base_stat}
                    maxValue={findMaxValue(pokemonData.stats)}
                    color={pokemonData.types[0].type.name}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}
