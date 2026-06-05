import type { Generation } from "../Games/Generation.js";
import type { Move } from "../Moves/Move.js";
import type { MoveDamageClass } from "../Moves/MoveDamageClass.js";
import type { GenerationGameIndex, Name } from "../Utility/CommonModels.js";
import type { NamedApiResource } from "../Utility/ApiResourceList.js";
import type { Pokemon } from "./Pokemon.js";

export type Type = {
	damage_relations: TypeRelations;
	game_indices: GenerationGameIndex[];
	generation: NamedApiResource<Generation>;
	id: number;
	move_damage_class: NamedApiResource<MoveDamageClass>;
	moves: NamedApiResource<Move>;
	name: string;
	names: Name[];
	pokemon: TypePokemon[];
};

export type TypePokemon = {
	pokemon: NamedApiResource<Pokemon>;
	slot: number;
};

export type TypeRelations = {
	double_damage_from: NamedApiResource<Type>[];
	double_damage_to: NamedApiResource<Type>[];
	half_damage_from: NamedApiResource<Type>[];
	half_damage_to: NamedApiResource<Type>[];
	no_damage_from: NamedApiResource<Type>[];
	no_damage_to: NamedApiResource<Type>[];
};
