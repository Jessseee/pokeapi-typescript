import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type PokemonHabitat = {
	id: number;
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};
