import { z } from "zod";
import type { ApiResourceList, Base, NamedBase } from "../interfaces/index.js";

const BaseSchema = z
    .object({
        id: z.number().int(),
    })
    .passthrough();

const NamedBaseSchema = BaseSchema.extend({
    name: z.string(),
}).passthrough();

const ApiResourceSchema = z
    .object({
        url: z.string(),
    })
    .passthrough();

const NamedApiResourceSchema = ApiResourceSchema.extend({
    name: z.string(),
}).passthrough();

const ApiResourceListSchema = z
    .object({
        count: z.number().int().nonnegative(),
        next: z.string().nullable(),
        previous: z.string().nullable(),
        results: z.array(ApiResourceSchema),
    })
    .passthrough();

const NamedApiResourceListSchema = z
    .object({
        count: z.number().int().nonnegative(),
        next: z.string().nullable(),
        previous: z.string().nullable(),
        results: z.array(NamedApiResourceSchema),
    })
    .passthrough();

function formatZodError(error: z.ZodError): string {
    return error.issues
        .map((issue) => {
            const path = issue.path.length > 0 ? issue.path.join(".") : "root";
            return `${path}: ${issue.message}`;
        })
        .join("; ");
}

function parseWithSchema<T>(schema: z.ZodType<T>, data: unknown, source: string): T {
    const result = schema.safeParse(data);

    if (!result.success) {
        throw new Error(`Invalid data received from ${source}: ${formatZodError(result.error)}`);
    }

    return result.data;
}

export function parseBase<T extends Base>(data: unknown, source: string): T {
    return parseWithSchema(BaseSchema, data, source) as T;
}

export function parseNamedBase<T extends NamedBase>(data: unknown, source: string): T {
    return parseWithSchema(NamedBaseSchema, data, source) as T;
}

export function parseApiResourceList<T extends Base>(
    data: unknown,
    source: string,
    named: boolean = false,
): ApiResourceList<T> {
    const schema = named ? NamedApiResourceListSchema : ApiResourceListSchema;

    return parseWithSchema(schema, data, source) as ApiResourceList<T>;
}