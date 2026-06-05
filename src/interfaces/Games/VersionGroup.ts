import type { Region } from "../Locations/Region.js";
import type { MoveLearnMethod } from "../Moves/MoveLearnMethod.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Generation } from "./Generation.js";
import type { Pokedex } from "./Pokedex.js";
import type { Version } from "./Version.js";

export type VersionGroup = {
	generation: NamedApiResource<Generation>;
	id: number;
	move_learn_methods: NamedApiResource<MoveLearnMethod>[];
	name: string;
	order: number;
	pokedexes: NamedApiResource<Pokedex>[];
	regions: NamedApiResource<Region>[];
	versions: NamedApiResource<Version>[];
};
