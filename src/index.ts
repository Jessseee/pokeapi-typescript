import type { Berry } from "./interfaces/Berries/Berry.js";
import type { BerryFirmness } from "./interfaces/Berries/BerryFirmness.js";
import type { BerryFlavor } from "./interfaces/Berries/BerryFlavor.js";
import type { ContestEffect } from "./interfaces/Contests/ContestEffect.js";
import type { ContestType } from "./interfaces/Contests/ContestType.js";
import type { SuperContestEffect } from "./interfaces/Contests/SuperContestEffect.js";
import type { EncounterCondition } from "./interfaces/Encounters/EncounterCondition.js";
import type { EncounterConditionValue } from "./interfaces/Encounters/EncounterConditionValue.js";
import type { EncounterMethod } from "./interfaces/Encounters/EncounterMethod.js";
import type { EvolutionChain } from "./interfaces/Evolution/EvolutionChain.js";
import type { EvolutionTrigger } from "./interfaces/Evolution/EvolutionTrigger.js";
import type { Generation } from "./interfaces/Games/Generation.js";
import type { Pokedex } from "./interfaces/Games/Pokedex.js";
import type { Version } from "./interfaces/Games/Version.js";
import type { VersionGroup } from "./interfaces/Games/VersionGroup.js";
import type { Item } from "./interfaces/Items/Item.js";
import type { ItemAttribute } from "./interfaces/Items/ItemAttribute.js";
import type { ItemCategory } from "./interfaces/Items/ItemCategory.js";
import type { ItemFlingEffect } from "./interfaces/Items/ItemFlingEffect.js";
import type { ItemPocket } from "./interfaces/Items/ItemPocket.js";
import type { Location } from "./interfaces/Locations/Location.js";
import type { LocationArea } from "./interfaces/Locations/LocationArea.js";
import type { PalParkArea } from "./interfaces/Locations/PalParkArea.js";
import type { Region } from "./interfaces/Locations/Region.js";
import type { Machine } from "./interfaces/Machines/Machine.js";
import type { Move } from "./interfaces/Moves/Move.js";
import type { MoveAilment } from "./interfaces/Moves/MoveAilment.js";
import type { MoveBattleStyle } from "./interfaces/Moves/MoveBattleStyle.js";
import type { MoveCategory } from "./interfaces/Moves/MoveCategory.js";
import type { MoveDamageClass } from "./interfaces/Moves/MoveDamageClass.js";
import type { MoveLearnMethod } from "./interfaces/Moves/MoveLearnMethod.js";
import type { MoveTarget } from "./interfaces/Moves/MoveTarget.js";
import type { Ability } from "./interfaces/Pokemon/Ability.js";
import type { Characteristic } from "./interfaces/Pokemon/Characteristic.js";
import type { EggGroup } from "./interfaces/Pokemon/EggGroup.js";
import type { Gender } from "./interfaces/Pokemon/Gender.js";
import type { GrowthRate } from "./interfaces/Pokemon/GrowthRate.js";
import type { Nature } from "./interfaces/Pokemon/Nature.js";
import type { PokeathlonStat } from "./interfaces/Pokemon/PokeathlonStat.js";
import type { Pokemon } from "./interfaces/Pokemon/Pokemon.js";
import type { PokemonColor } from "./interfaces/Pokemon/PokemonColor.js";
import type { PokemonForm } from "./interfaces/Pokemon/PokemonForm.js";
import type { PokemonHabitat } from "./interfaces/Pokemon/PokemonHabitat.js";
import type { PokemonShape } from "./interfaces/Pokemon/PokemonShape.js";
import type { PokemonSpecies } from "./interfaces/Pokemon/PokemonSpecies.js";
import type { Stat } from "./interfaces/Pokemon/Stat.js";
import type { Type } from "./interfaces/Pokemon/Type.js";
import type { Language } from "./interfaces/Utility/Language.js";
import { Endpoint } from "./lib/Endpoint.js";
import { NamedEndpoint } from "./lib/NamedEndpoint.js";

export type * from "./interfaces/Berries/Berry.js";
export type * from "./interfaces/Berries/BerryFirmness.js";
export type * from "./interfaces/Berries/BerryFlavor.js";
export type * from "./interfaces/Contests/ContestEffect.js";
export type * from "./interfaces/Contests/ContestType.js";
export type * from "./interfaces/Contests/SuperContestEffect.js";
export type * from "./interfaces/Encounters/EncounterCondition.js";
export type * from "./interfaces/Encounters/EncounterConditionValue.js";
export type * from "./interfaces/Encounters/EncounterMethod.js";
export type * from "./interfaces/Evolution/EvolutionChain.js";
export type * from "./interfaces/Evolution/EvolutionTrigger.js";
export type * from "./interfaces/Games/Generation.js";
export type * from "./interfaces/Games/Pokedex.js";
export type * from "./interfaces/Games/Version.js";
export type * from "./interfaces/Games/VersionGroup.js";
export type * from "./interfaces/Items/Item.js";
export type * from "./interfaces/Items/ItemAttribute.js";
export type * from "./interfaces/Items/ItemCategory.js";
export type * from "./interfaces/Items/ItemFlingEffect.js";
export type * from "./interfaces/Items/ItemPocket.js";
export type * from "./interfaces/Locations/Location.js";
export type * from "./interfaces/Locations/LocationArea.js";
export type * from "./interfaces/Locations/PalParkArea.js";
export type * from "./interfaces/Locations/Region.js";
export type * from "./interfaces/Machines/Machine.js";
export type * from "./interfaces/Moves/Move.js";
export type * from "./interfaces/Moves/MoveAilment.js";
export type * from "./interfaces/Moves/MoveBattleStyle.js";
export type * from "./interfaces/Moves/MoveCategory.js";
export type * from "./interfaces/Moves/MoveDamageClass.js";
export type * from "./interfaces/Moves/MoveLearnMethod.js";
export type * from "./interfaces/Moves/MoveTarget.js";
export type * from "./interfaces/Pokemon/Ability.js";
export type * from "./interfaces/Pokemon/Characteristic.js";
export type * from "./interfaces/Pokemon/EggGroup.js";
export type * from "./interfaces/Pokemon/Gender.js";
export type * from "./interfaces/Pokemon/GrowthRate.js";
export type * from "./interfaces/Pokemon/Nature.js";
export type * from "./interfaces/Pokemon/PokeathlonStat.js";
export type * from "./interfaces/Pokemon/Pokemon.js";
export type * from "./interfaces/Pokemon/PokemonColor.js";
export type * from "./interfaces/Pokemon/PokemonForm.js";
export type * from "./interfaces/Pokemon/PokemonHabitat.js";
export type * from "./interfaces/Pokemon/PokemonShape.js";
export type * from "./interfaces/Pokemon/PokemonSpecies.js";
export type * from "./interfaces/Pokemon/Stat.js";
export type * from "./interfaces/Pokemon/Type.js";
export type * from "./interfaces/Utility/Language.js";
export type * from "./interfaces/Utility/CommonModels.js";
export type * from "./interfaces/Utility/ApiResourceList.js";
export type * from "./interfaces/Utility/NamedApiResourceList.js";

export class PokeAPI {
	public static Berry = new NamedEndpoint<Berry>("berry");

	public static BerryFirmness = new NamedEndpoint<BerryFirmness>("berry-firmness");

	public static BerryFlavor = new NamedEndpoint<BerryFlavor>("berry-flavor");

	public static ContestType = new NamedEndpoint<ContestType>("contest-type");

	public static ContestEffect = new Endpoint<ContestEffect>("contest-effect");

	public static SuperContestEffect = new Endpoint<SuperContestEffect>("super-contest-effect");

	public static EncounterMethod = new NamedEndpoint<EncounterMethod>("encounter-method");

	public static EncounterCondition = new NamedEndpoint<EncounterCondition>("encounter-condition");

	public static EncounterConditionValue = new NamedEndpoint<EncounterConditionValue>("encounter-condition-value");

	public static EvolutionChain = new Endpoint<EvolutionChain>("evolution-chain");

	public static EvolutionTrigger = new NamedEndpoint<EvolutionTrigger>("evolution-trigger");

	public static Generation = new NamedEndpoint<Generation>("generation");

	public static Pokedex = new NamedEndpoint<Pokedex>("pokedex");

	public static Version = new NamedEndpoint<Version>("version");

	public static VerionGroup = new NamedEndpoint<VersionGroup>("version-group");

	public static Item = new NamedEndpoint<Item>("item");

	public static ItemAttribute = new NamedEndpoint<ItemAttribute>("item-attribute");

	public static ItemCategory = new NamedEndpoint<ItemCategory>("item-category");

	public static ItemFlingEffect = new NamedEndpoint<ItemFlingEffect>("item-fling-effect");

	public static ItemPocket = new NamedEndpoint<ItemPocket>("item-pocket");

	public static Location = new NamedEndpoint<Location>("location");

	public static LocationArea = new NamedEndpoint<LocationArea>("location-area");

	public static PalParkArea = new NamedEndpoint<PalParkArea>("pal-park-area");

	public static Region = new NamedEndpoint<Region>("region");

	public static Machine = new Endpoint<Machine>("machine");

	public static Move = new NamedEndpoint<Move>("move");

	public static MoveAilment = new NamedEndpoint<MoveAilment>("move-ailment");

	public static MoveBattleStyle = new NamedEndpoint<MoveBattleStyle>("move-battle-style");

	public static MoveCategory = new NamedEndpoint<MoveCategory>("move-category");

	public static MoveDamageClass = new NamedEndpoint<MoveDamageClass>("move-damage-class");

	public static MoveLearnMethod = new NamedEndpoint<MoveLearnMethod>("move-learn-method");

	public static MoveTarget = new NamedEndpoint<MoveTarget>("move-target");

	public static Ability = new NamedEndpoint<Ability>("ability");

	public static Characteristic = new Endpoint<Characteristic>("characteristic");

	public static EggGroup = new NamedEndpoint<EggGroup>("egg-group");

	public static Gender = new NamedEndpoint<Gender>("gender");

	public static GrowthRate = new NamedEndpoint<GrowthRate>("growth-rate");

	public static Nature = new NamedEndpoint<Nature>("nature");

	public static PokeathlonStat = new NamedEndpoint<PokeathlonStat>("pokeathlon-stat");

	public static Pokemon = new NamedEndpoint<Pokemon>("pokemon");

	public static PokemonColor = new NamedEndpoint<PokemonColor>("pokemon-color");

	public static PokemonForm = new NamedEndpoint<PokemonForm>("pokemon-form");

	public static PokemonHabitat = new NamedEndpoint<PokemonHabitat>("pokemon-habitat");

	public static PokemonShape = new NamedEndpoint<PokemonShape>("pokemon-shape");

	public static PokemonSpecies = new NamedEndpoint<PokemonSpecies>("pokemon-species");

	public static Stat = new NamedEndpoint<Stat>("stat");

	public static Type = new NamedEndpoint<Type>("type");

	public static Language = new NamedEndpoint<Language>("language");
}
