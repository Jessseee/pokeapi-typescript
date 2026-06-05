import type { Generation } from "../Games/Generation.js";
import type { Pokedex } from "../Games/Pokedex.js";
import type { VersionGroup } from "../Games/VersionGroup.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Location } from "./Location.js";

export type Region = {
	id: number;
	locations: NamedApiResource<Location>[];
	main_generation: NamedApiResource<Generation>;
	name: string;
	names: Name[];
	pokedexes: NamedApiResource<Pokedex>[];
	version_groups: NamedApiResource<VersionGroup>[];
};
