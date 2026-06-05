import type { Description, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Item } from "./Item.js";

export type ItemAttribute = {
	descriptions: Description[];
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
	names: Name[];
};
