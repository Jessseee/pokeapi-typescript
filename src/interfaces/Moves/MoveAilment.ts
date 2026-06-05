import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { Move } from "./Move.js";

export type MoveAilment = {
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
	names: Name[];
};
