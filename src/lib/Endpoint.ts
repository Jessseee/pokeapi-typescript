import { Collection } from "@discordjs/collection";
import type { ApiResourceList, Base } from "../interfaces/index.js";
import { parseApiResourceList, parseBase } from "./validation.js";

const BASE_URI = "https://pokeapi.co/api/v2";

export type EndpointParam = number;

type Parser<T> = (data: unknown, source: string) => T;

export class Endpoint<T extends Base> {
	protected readonly resource: string;

	protected _list?: ApiResourceList<T>;

	protected readonly cache: Collection<number, T>;

	public constructor(resource: string) {
		this.resource = resource;
		this.cache = new Collection<number, T>();
	}

	public get(param: EndpointParam): T | undefined {
		return this.cache.get(param);
	}

	public async resolve(param: EndpointParam): Promise<T> {
		return this.get(param) ?? this.fetch(param);
	}

	public async fetch(param: EndpointParam, cache = true): Promise<T> {
		return this.fetchResource(param, parseBase<T>, cache);
	}

	public async list(limit = 20, offset = 0): Promise<ApiResourceList<T>> {
		return this.listResources<ApiResourceList<T>>(limit, offset, false);
	}

	public async listAll(cache = true): Promise<ApiResourceList<T>> {
		return this.listAllResources<ApiResourceList<T>>(cache, false);
	}

	protected async fetchResource(
		param: string | number,
		parser: Parser<T>,
		cache: boolean,
	): Promise<T> {
		const resolvedParam = typeof param === "string" ? param.toLowerCase() : param;
		const url = `${BASE_URI}/${this.resource}/${resolvedParam}`;

		const data = await this.requestJson(url);
		const parsed = parser(data, url);

		if (cache) {
			this.cacheResource(parsed);
		}

		return parsed;
	}

	protected async listResources<TList extends ApiResourceList<T>>(
		limit: number,
		offset: number,
		named: boolean,
	): Promise<TList> {
		if (this._list) {
			const results = this._list.results.slice(offset, offset + limit);
			const { count, next, previous } = this._list;

			return {
				count,
				next,
				previous,
				results,
			} as TList;
		}

		const params = new URLSearchParams({
			limit: `${limit}`,
			offset: `${offset}`,
		});

		const url = `${BASE_URI}/${this.resource}?${params}`;
		const data = await this.requestJson(url);

		return parseApiResourceList<T>(data, url, named) as TList;
	}

	protected async listAllResources<TList extends ApiResourceList<T>>(
		cache: boolean,
		named: boolean,
	): Promise<TList> {
		if (this._list) {
			return this._list as TList;
		}

		const firstUrl = `${BASE_URI}/${this.resource}?limit=1`;
		const firstData = await this.requestJson(firstUrl);
		const first = parseApiResourceList<T>(firstData, firstUrl, named);

		const url = `${BASE_URI}/${this.resource}?limit=${first.count}`;
		const data = await this.requestJson(url);
		const parsed = parseApiResourceList<T>(data, url, named) as TList;

		if (cache) {
			this._list = parsed;
		}

		return parsed;
	}

	protected cacheResource(data: T): void {
		this.cache.set(data.id, data);
	}

	private async requestJson(url: string): Promise<unknown> {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Request failed for ${url}: ${response.status} ${response.statusText}`);
		}

		return response.json();
	}
}