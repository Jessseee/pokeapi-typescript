import type { Region } from "../Locations/Region.js";
import type { Move } from "../Moves/Move.js";
import type { Ability } from "../Pokemon/Ability.js";
import type { PokemonSpecies } from "../Pokemon/PokemonSpecies.js";
import type { Type } from "../Pokemon/Type.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { VersionGroup } from "./VersionGroup.js";

export type Generation = {
	abilities: NamedApiResource<Ability>[];
	id: number;
	main_region: NamedApiResource<Region>;
	moves: NamedApiResource<Move>[];
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
	types: NamedApiResource<Type>[];
	version_groups: NamedApiResource<VersionGroup>[];
};
