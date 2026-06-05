import type { GenerationGameIndex, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { LocationArea } from "./LocationArea.js";
import type { Region } from "./Region.js";

export type Location = {
	areas: NamedApiResource<LocationArea>[];
	game_indices: GenerationGameIndex[];
	id: number;
	name: string;
	names: Name[];
	region: NamedApiResource<Region>;
};
