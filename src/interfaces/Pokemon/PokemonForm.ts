import type { VersionGroup } from "../Games/VersionGroup.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Pokemon } from "./Pokemon.js";

export type PokemonForm = {
	form_name: string;
	form_names: Name[];
	form_order: number;
	id: number;
	is_battle_only: boolean;
	is_default: boolean;
	is_mega: boolean;
	name: string;
	names: Name[];
	order: number;
	pokemon: NamedApiResource<Pokemon>;
	sprites: PokemonFormSprites;
	version_group: NamedApiResource<VersionGroup>;
};

export type PokemonFormSprites = {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
};
