import type {
	Berry,
	BerryFirmness,
	BerryFlavor,
	ContestEffect,
	ContestType,
	SuperContestEffect,
	EncounterCondition,
	EncounterConditionValue,
	EncounterMethod,
	EvolutionChain,
	EvolutionTrigger,
	Generation,
	Pokedex,
	Version,
	VersionGroup,
	Item,
	ItemAttribute,
	ItemCategory,
	ItemFlingEffect,
	ItemPocket,
	Location,
	LocationArea,
	PalParkArea,
	Region,
	Machine,
	Move,
	MoveAilment,
	MoveBattleStyle,
	MoveCategory,
	MoveDamageClass,
	MoveLearnMethod,
	MoveTarget,
	Ability,
	Characteristic,
	EggGroup,
	Gender,
	GrowthRate,
	Nature,
	PokeathlonStat,
	Pokemon,
	PokemonColor,
	PokemonForm,
	PokemonHabitat,
	PokemonShape,
	PokemonSpecies,
	Stat,
	Type,
	Language,
} from "./interfaces/index.js";

import { Endpoint, NamedEndpoint } from "./lib/index.js";

const endpoint = <T extends { id: number }>(resource: string) => new Endpoint<T>(resource);
const namedEndpoint = <T extends { id: number; name: string }>(resource: string) =>
	new NamedEndpoint<T>(resource);

export const PokeAPI = {
	Berry: namedEndpoint<Berry>("berry"),
	BerryFirmness: namedEndpoint<BerryFirmness>("berry-firmness"),
	BerryFlavor: namedEndpoint<BerryFlavor>("berry-flavor"),

	ContestType: namedEndpoint<ContestType>("contest-type"),
	ContestEffect: endpoint<ContestEffect>("contest-effect"),
	SuperContestEffect: endpoint<SuperContestEffect>("super-contest-effect"),

	EncounterMethod: namedEndpoint<EncounterMethod>("encounter-method"),
	EncounterCondition: namedEndpoint<EncounterCondition>("encounter-condition"),
	EncounterConditionValue: namedEndpoint<EncounterConditionValue>("encounter-condition-value"),

	EvolutionChain: endpoint<EvolutionChain>("evolution-chain"),
	EvolutionTrigger: namedEndpoint<EvolutionTrigger>("evolution-trigger"),

	Generation: namedEndpoint<Generation>("generation"),
	Pokedex: namedEndpoint<Pokedex>("pokedex"),
	Version: namedEndpoint<Version>("version"),
	VersionGroup: namedEndpoint<VersionGroup>("version-group"),

	Item: namedEndpoint<Item>("item"),
	ItemAttribute: namedEndpoint<ItemAttribute>("item-attribute"),
	ItemCategory: namedEndpoint<ItemCategory>("item-category"),
	ItemFlingEffect: namedEndpoint<ItemFlingEffect>("item-fling-effect"),
	ItemPocket: namedEndpoint<ItemPocket>("item-pocket"),

	Location: namedEndpoint<Location>("location"),
	LocationArea: namedEndpoint<LocationArea>("location-area"),
	PalParkArea: namedEndpoint<PalParkArea>("pal-park-area"),
	Region: namedEndpoint<Region>("region"),

	Machine: endpoint<Machine>("machine"),

	Move: namedEndpoint<Move>("move"),
	MoveAilment: namedEndpoint<MoveAilment>("move-ailment"),
	MoveBattleStyle: namedEndpoint<MoveBattleStyle>("move-battle-style"),
	MoveCategory: namedEndpoint<MoveCategory>("move-category"),
	MoveDamageClass: namedEndpoint<MoveDamageClass>("move-damage-class"),
	MoveLearnMethod: namedEndpoint<MoveLearnMethod>("move-learn-method"),
	MoveTarget: namedEndpoint<MoveTarget>("move-target"),

	Ability: namedEndpoint<Ability>("ability"),
	Characteristic: endpoint<Characteristic>("characteristic"),
	EggGroup: namedEndpoint<EggGroup>("egg-group"),
	Gender: namedEndpoint<Gender>("gender"),
	GrowthRate: namedEndpoint<GrowthRate>("growth-rate"),
	Nature: namedEndpoint<Nature>("nature"),
	PokeathlonStat: namedEndpoint<PokeathlonStat>("pokeathlon-stat"),
	Pokemon: namedEndpoint<Pokemon>("pokemon"),
	PokemonColor: namedEndpoint<PokemonColor>("pokemon-color"),
	PokemonForm: namedEndpoint<PokemonForm>("pokemon-form"),
	PokemonHabitat: namedEndpoint<PokemonHabitat>("pokemon-habitat"),
	PokemonShape: namedEndpoint<PokemonShape>("pokemon-shape"),
	PokemonSpecies: namedEndpoint<PokemonSpecies>("pokemon-species"),
	Stat: namedEndpoint<Stat>("stat"),
	Type: namedEndpoint<Type>("type"),

	Language: namedEndpoint<Language>("language"),
} as const;

export type * from "./interfaces/index.js";
export { Endpoint, NamedEndpoint } from "./lib/index.js";