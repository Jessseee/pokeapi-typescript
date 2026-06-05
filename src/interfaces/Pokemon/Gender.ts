import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type Gender = {
	id: number;
	name: string;
	pokemon_species_details: PokemonSpeciesGender[];
	required_for_evolution: NamedApiResource<PokemonSpecies>[];
};

export type PokemonSpeciesGender = {
	pokemon_species: NamedApiResource<PokemonSpecies>;
	rate: number;
};
