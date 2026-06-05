import type { Item } from "../Items/Item.js";
import type { Type } from "../Pokemon/Type.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { BerryFirmness } from "./BerryFirmness.js";
import type { BerryFlavor } from "./BerryFlavor.js";

export type Berry = {
	firmness: NamedApiResource<BerryFirmness>;
	flavors: BerryFlavorMap[];
	growth_time: number;
	id: number;
	item: NamedApiResource<Item>;
	max_harvest: number;
	name: string;
	natural_gift_power: number;
	natural_gift_type: NamedApiResource<Type>;
	size: number;
	smoothness: number;
	soil_dryness: number;
};

export type BerryFlavorMap = {
	flavor: NamedApiResource<BerryFlavor>;
	potency: number;
};
