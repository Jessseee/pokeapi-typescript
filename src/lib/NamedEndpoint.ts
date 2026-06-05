import type {
    NamedApiResourceList,
    NamedBase,
} from "../interfaces/index.js";
import { Endpoint, type EndpointParam } from "./Endpoint.js";
import { parseNamedBase } from "./validation.js";

export type NamedEndpointParam = EndpointParam | string;

export class NamedEndpoint<T extends NamedBase> extends Endpoint<T> {
    declare protected _list?: NamedApiResourceList<T>;

    private readonly nameMap: Map<string, number>;

    public constructor(resource: string) {
        super(resource);
        this.nameMap = new Map<string, number>();
    }

    public get(param: NamedEndpointParam): T | undefined {
        if (typeof param === "number") {
            return this.cache.get(param);
        }

        const id = this.nameMap.get(param.toLowerCase());

        return id === undefined ? undefined : this.cache.get(id);
    }

    public async resolve(param: NamedEndpointParam): Promise<T> {
        return this.get(param) ?? this.fetch(param);
    }

    public async fetch(param: NamedEndpointParam, cache = true): Promise<T> {
        return this.fetchResource(param, parseNamedBase<T>, cache);
    }

    public async list(limit = 20, offset = 0): Promise<NamedApiResourceList<T>> {
        return this.listResources<NamedApiResourceList<T>>(limit, offset, true);
    }

    public async listAll(cache = true): Promise<NamedApiResourceList<T>> {
        return this.listAllResources<NamedApiResourceList<T>>(cache, true);
    }

    protected cacheResource(data: T): void {
        super.cacheResource(data);
        this.nameMap.set(data.name.toLowerCase(), data.id);
    }
}