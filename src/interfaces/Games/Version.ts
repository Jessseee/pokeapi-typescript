import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/NamedApiResourceList.js";
import type { VersionGroup } from "./VersionGroup.js";

export type Version = {
	id: number;
	name: string;
	names: Name[];
	version_group: NamedApiResource<VersionGroup>;
};
