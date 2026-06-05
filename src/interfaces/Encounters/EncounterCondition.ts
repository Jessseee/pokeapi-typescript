import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { EncounterConditionValue } from "./EncounterConditionValue.js";

export type EncounterCondition = {
	id: number;
	name: string;
	names: Name[];
	values: NamedApiResource<EncounterConditionValue>[];
};
