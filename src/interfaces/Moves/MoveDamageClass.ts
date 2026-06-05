import type { Description, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Move } from "./Move.js";

export type MoveDamageClass = {
	descriptions: Description[];
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
	names: Name[];
};
