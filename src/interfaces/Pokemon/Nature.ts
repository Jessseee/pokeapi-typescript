import type { BerryFlavor } from "../Berries/BerryFlavor.js";
import type { MoveBattleStyle } from "../Moves/MoveBattleStyle.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { PokeathlonStat } from "./PokeathlonStat.js";
import type { Stat } from "./Stat.js";

export type Nature = {
	decreased_stat: NamedApiResource<Stat>;
	hates_flavor: NamedApiResource<BerryFlavor>;
	id: number;
	increased_stat: NamedApiResource<Stat>;
	likes_flavor: NamedApiResource<BerryFlavor>;
	move_battle_style_preference: MoveBattleStylePreference[];
	name: string;
	names: Name[];
	pokeathlon_stat_changes: NatureStatChange[];
};

export type NatureStatChange = {
	max_change: number;
	pokeathlon_stat: NamedApiResource<PokeathlonStat>;
};

export type MoveBattleStylePreference = {
	high_hp_preference: number;
	low_hp_preference: number;
	move_battle_style: NamedApiResource<MoveBattleStyle>;
};
