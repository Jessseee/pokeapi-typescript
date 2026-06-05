import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { ItemCategory } from "./ItemCategory.js";

export type ItemPocket = {
	categories: NamedApiResource<ItemCategory>[];
	id: number;
	name: string;
};
