import type { EncounterConditionValue, EncounterMethod } from "../Encounters/index.js";
import type { VersionGroup, Version, Generation } from "../Games/index.js";
import type { Machine } from "../Machines/index.js";
import type { ApiResource, NamedApiResource } from "./ApiResourceList.js";
import type { Language } from "./Language.js";

export type CacheableResource = {
	id: number;
	name: string;
};

export type Description = {
	description: string;
	language: NamedApiResource<Language>;
};

export type Effect = {
	effet: string;
	language: NamedApiResource<Language>;
};

export type Encounter = {
	chance: number;
	condition_values: NamedApiResource<EncounterConditionValue>[];
	max_level: number;
	method: NamedApiResource<EncounterMethod>;
	min_level: number;
};

export type FlavorText = {
	flavor_text: string;
	language: NamedApiResource<Language>;
	version: NamedApiResource<Version>;
};

export type GenerationGameIndex = {
	game_index: number;
	generation: NamedApiResource<Generation>;
};

export type MachineVersionDetail = {
	machine: ApiResource<Machine>;
	version_group: NamedApiResource<VersionGroup>;
};

export type Name = {
	language: NamedApiResource<Language>;
	name: string;
};

export type VerboseEffect = {
	effect: string;
	language: NamedApiResource<Language>;
	short_effect: string;
};

export type VersionEncounterDetail = {
	encounter_details: Encounter[];
	max_chance: number;
	version: NamedApiResource<Version>;
};

export type VersionGameIndex = {
	game_index: number;
	version: NamedApiResource<Version>;
};

export type VersionGroupFlavorText = {
	language: NamedApiResource<Language>;
	text: string;
	version_group: NamedApiResource<VersionGroup>;
};
