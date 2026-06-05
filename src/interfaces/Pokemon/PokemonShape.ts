import type { Name } from "../Utility/CommonModels.js";
import type { Language } from "../Utility/Language.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { PokemonSpecies } from "./PokemonSpecies.js";

export type PokemonShape = {
	awesome_names: AwesomeName[];
	id: number;
	name: string;
	names: Name[];
	pokemons_species: PokemonSpecies;
};

export type AwesomeName = {
	awesome_name: string;
	language: NamedApiResource<Language>;
};
