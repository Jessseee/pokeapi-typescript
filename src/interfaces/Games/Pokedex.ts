import type { Region } from "../Locations/Region.js";
import type { PokemonSpecies } from "../Pokemon/PokemonSpecies.js";
import type { Description, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { VersionGroup } from "./VersionGroup.js";

export type Pokedex = {
	descriptions: Description[];
	id: number;
	is_main_series: boolean;
	name: string;
	names: Name[];
	pokemon_entries: PokemonEntry[];
	region: NamedApiResource<Region>;
	version_groups: NamedApiResource<VersionGroup>[];
};

export type PokemonEntry = {
	entry_number: number;
	pokemon_species: NamedApiResource<PokemonSpecies>;
};
