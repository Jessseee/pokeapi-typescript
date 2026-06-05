import type { Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Nature } from "./Nature.js";

export type PokeathlonStat = {
	affecting_natures: NaturePokeathlonStatAffectSets;
	id: number;
	name: string;
	names: Name[];
};

export type NaturePokeathlonStatAffectSets = {
	decrease: NaturePokeathlonStatAffect[];
	increase: NaturePokeathlonStatAffect[];
};

export type NaturePokeathlonStatAffect = {
	max_change: number;
	nature: NamedApiResource<Nature>;
};
