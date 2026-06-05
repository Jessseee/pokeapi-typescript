import type { Move } from "../Moves/Move.js";
import type { MoveDamageClass } from "../Moves/MoveDamageClass.js";
import type { ApiResource } from "../Utility/ApiResourceList.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Characteristic } from "./Characteristic.js";
import type { Nature } from "./Nature.js";

export type Stat = {
	affecting_moves: MoveStatAffectSets;
	affecting_natures: NatureStatAffectSets;
	characteristics: ApiResource<Characteristic>;
	id: number;
	is_battle_only: boolean;
	move_damage_class: NamedApiResource<MoveDamageClass>;
	name: string;
	name_index: number;
	names: Name[];
};

export type MoveStatAffectSets = {
	decrease: MoveStatAffect[];
	increase: MoveStatAffect[];
};

export type MoveStatAffect = {
	change: number;
	move: NamedApiResource<Move>;
};

export type NatureStatAffectSets = {
	decrease: Nature;
	increase: Nature;
};
