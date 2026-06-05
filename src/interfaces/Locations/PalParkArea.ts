import type { PokemonSpecies } from "../Pokemon/PokemonSpecies.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";

export type PalParkArea = {
	id: number;
	name: string;
	names: Name[];
	pokemon_encounters: PalParkEncounterSpecies[];
};

export type PalParkEncounterSpecies = {
	base_socre: number;
	pokemon_species: NamedApiResource<PokemonSpecies>;
	rate: number;
};
