import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Item } from "./Item.js";
import type { ItemPocket } from "./ItemPocket.js";

export type ItemCategory = {
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
	names: Name[];
	pocket: NamedApiResource<ItemPocket>;
};
