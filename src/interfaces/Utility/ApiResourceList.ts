import type { Endpoint } from "../../lib/index.js";

export type Base = {
	id: number;
};

export type NamedBase = Base & {
	name: string;
};

export type ApiResource<T extends Base = Base> = {
	endpoint?: Endpoint<T>;
	url: string;
};

export type NamedApiResource<T extends NamedBase = NamedBase> = ApiResource<T> & {
	name: string;
};

export type ApiResourceList<T extends Base = Base> = {
	count: number;
	next: string | null;
	previous: string | null;
	results: ApiResource<T>[];
};

export type NamedApiResourceList<T extends NamedBase = NamedBase> = {
	count: number;
	next: string | null;
	previous: string | null;
	results: NamedApiResource<T>[];
};