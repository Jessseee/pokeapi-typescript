import type { PokemonSpecies } from "../Pokemon/PokemonSpecies.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";

export type EvolutionTrigger = {
	id: number;
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};
