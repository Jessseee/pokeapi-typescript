import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { ItemCategory } from "./ItemCategory.js";

export type ItemPocket = {
	categories: NamedApiResource<ItemCategory>[];
	id: number;
	name: string;
};
