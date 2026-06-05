import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type PokemonColor = {
	id: number;
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>;
};
