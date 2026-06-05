import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Berry } from "./Berry.js";

export type BerryFirmness = {
	berries: NamedApiResource<Berry>[];
	id: number;
	name: string;
	names: Name[];
};
