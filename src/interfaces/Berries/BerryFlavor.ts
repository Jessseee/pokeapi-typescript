import type { ContestType } from "../Contests/ContestType.js";
import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Berry } from "./Berry.js";

export type BerryFlavor = {
	berries: FlavorBerryMap[];
	contest_type: NamedApiResource<ContestType>;
	id: number;
	name: string;
	names: Name[];
};

export type FlavorBerryMap = {
	berry: NamedApiResource<Berry>;
	potency: number;
};
