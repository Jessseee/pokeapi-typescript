import type { Description } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type GrowthRate = {
	descriptions: Description[];
	formula: string;
	id: number;
	levels: GrowthRateExperienceLevel[];
	name: string;
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};

export type GrowthRateExperienceLevel = {
	experience: number;
	level: number;
};
