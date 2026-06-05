import type { Name } from "../Utility/CommonModels.js";

export type EncounterMethod = {
	id: number;
	name: string;
	names: Name[];
	order: number;
};
