import type { Move } from "../Moves/Move.js";
import type { FlavorText } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";

export type SuperContestEffect = {
	flavor_text_entries: FlavorText[];
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
};
