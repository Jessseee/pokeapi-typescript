import type { Effect } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Item } from "./Item.js";

export type ItemFlingEffect = {
	effect_entries: Effect[];
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
};
