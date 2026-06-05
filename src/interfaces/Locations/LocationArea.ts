import type { EncounterMethod } from "../Encounters/EncounterMethod.js";
import type { Version } from "../Games/Version.js";
import type { Pokemon } from "../Pokemon/Pokemon.js";
import type { Name, VersionEncounterDetail } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Location } from "./Location.js";

export type LocationArea = {
	encounter_method_rates: EncounterMethodRate[];
	game_index: number;
	id: number;
	location: NamedApiResource<Location>;
	name: string;
	names: Name[];
	pokemon_encounters: PokemonEncounter[];
};

export type EncounterMethodRate = {
	encounter_method: NamedApiResource<EncounterMethod>;
	version_details: EncounterVersionDetails[];
};

export type EncounterVersionDetails = {
	rate: number;
	version_details: NamedApiResource<Version>;
};

export type PokemonEncounter = {
	pokemon: NamedApiResource<Pokemon>;
	version_details: VersionEncounterDetail[];
};
