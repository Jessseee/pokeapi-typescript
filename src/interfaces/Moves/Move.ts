import type { ContestEffect } from "../Contests/ContestEffect.js";
import type { ContestType } from "../Contests/ContestType.js";
import type { SuperContestEffect } from "../Contests/SuperContestEffect.js";
import type { Generation } from "../Games/Generation.js";
import type { VersionGroup } from "../Games/VersionGroup.js";
import type { AbilityEffectChange } from "../Pokemon/Ability.js";
import type { Stat } from "../Pokemon/Stat.js";
import type { Type } from "../Pokemon/Type.js";
import type { ApiResource } from "../Utility/ApiResourceList.js";
import type { MachineVersionDetail, Name, VerboseEffect } from "../Utility/CommonModels.js";
import type { Language } from "../Utility/Language.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { MoveAilment } from "./MoveAilment.js";
import type { MoveCategory } from "./MoveCategory.js";
import type { MoveDamageClass } from "./MoveDamageClass.js";
import type { MoveTarget } from "./MoveTarget.js";

export type Move = {
	accuracy: number;
	contest_combos: ContestComboSets;
	contest_effect: ApiResource<ContestEffect>;
	contest_type: NamedApiResource<ContestType>;
	damage_class: NamedApiResource<MoveDamageClass>;
	effect_chance: number;
	effect_changes: AbilityEffectChange[];
	effect_entries: VerboseEffect[];
	flavor_text_entries: MoveFlavorText[];
	generation: NamedApiResource<Generation>;
	id: number;
	machines: MachineVersionDetail[];
	meta: MoveMetaData;
	name: string;
	names: Name[];
	past_values: PastMoveStatValues[];
	power: number;
	pp: number;
	priority: number;
	stat_changes: MoveStatChange[];
	super_contest_effect: ApiResource<SuperContestEffect>;
	target: NamedApiResource<MoveTarget>;
	type: NamedApiResource<Type>;
};

export type ContestComboSets = {
	normal: ContestComboDetail;
	super: ContestComboDetail;
};

export type ContestComboDetail = {
	use_after: NamedApiResource<Move>[];
	use_before: NamedApiResource<Move>[];
};

export type MoveFlavorText = {
	flavor_text: string;
	language: NamedApiResource<Language>;
	version_group: NamedApiResource<VersionGroup>;
};

export type MoveMetaData = {
	ailment: NamedApiResource<MoveAilment>;
	ailment_chance: number;
	category: NamedApiResource<MoveCategory>;
	crit_rate: number;
	drain: number;
	flinch_chance: number;
	healing: number;
	max_hits: number;
	max_turns: number;
	min_hits: number;
	min_turns: number;
	stat_chance: number;
};

export type MoveStatChange = {
	change: number;
	stat: NamedApiResource<Stat>;
};

export type PastMoveStatValues = {
	accuracy: number;
	effect_chance: number;
	effect_entries: VerboseEffect[];
	power: number;
	pp: number;
	type: NamedApiResource<Type>;
	version_group: NamedApiResource<VersionGroup>;
};
