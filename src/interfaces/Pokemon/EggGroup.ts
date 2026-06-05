import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type EggGroup = {
	id: number;
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};
