import type { VersionGroup } from "../Games/VersionGroup.js";
import type { Item } from "../Items/Item.js";
import type { Move } from "../Moves/Move.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";

export type Machine = {
	id: number;
	item: NamedApiResource<Item>;
	move: NamedApiResource<Move>;
	version_group: NamedApiResource<VersionGroup>;
};
