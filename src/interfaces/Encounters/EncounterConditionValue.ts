import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { EncounterCondition } from "./EncounterCondition.js";

export type EncounterConditionValue = {
	condition: NamedApiResource<EncounterCondition>;
	id: number;
	name: string;
	names: Name[];
};
