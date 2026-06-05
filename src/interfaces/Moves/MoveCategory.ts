import type { Description } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Move } from "./Move.js";

export type MoveCategory = {
	descriptions: Description[];
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
};
