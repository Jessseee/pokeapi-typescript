import type { BerryFlavor } from "../Berries/BerryFlavor.js";
import type { Language } from "../Utility/Language.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";

export type ContestType = {
	berry_flavor: NamedApiResource<BerryFlavor>;
	id: number;
	name: string;
	names: ContestName[];
};

export type ContestName = {
	color: string;
	language: NamedApiResource<Language>;
	name: string;
};
