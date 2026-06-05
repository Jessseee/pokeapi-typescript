import type { VersionGroup } from "../Games/VersionGroup.js";
import type { Description, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";

export type MoveLearnMethod = {
	descriptions: Description[];
	id: number;
	name: string;
	names: Name[];
	version_groups: NamedApiResource<VersionGroup>[];
};
