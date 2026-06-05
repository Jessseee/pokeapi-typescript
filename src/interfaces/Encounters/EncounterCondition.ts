import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { EncounterConditionValue } from "./EncounterConditionValue.js";

export type EncounterCondition = {
	id: number;
	name: string;
	names: Name[];
	values: NamedApiResource<EncounterConditionValue>[];
};
