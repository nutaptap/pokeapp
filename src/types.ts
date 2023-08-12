export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  abilities: Ability[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any;
  sprites: {
    other: { "official-artwork": OfficialArtwork };
  };
  stats: Stat[];
  types: Type[];
  weight: number;
}
