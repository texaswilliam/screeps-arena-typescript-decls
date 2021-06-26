import { ERR_FULL, ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_NO_BODYPART, ERR_NOT_ENOUGH_ENERGY, ERR_NOT_ENOUGH_RESOURCES, ERR_NOT_IN_RANGE, ERR_NOT_OWNER,
    ERR_TIRED, OK } from '/game/constants';
import { BodyPartType, Direction, ResourceType } from '/types';
import { FindPathOpts, HasID, HasXY, SearchPathOpts } from '/interfaces';

export abstract class GameObject implements HasID, HasXY {
    exists: boolean;
    id: string;
    x: number;
    y: number;
    ticksToDecay: number;

    findPathTo(pos: HasXY, opts?: FindPathOpts): HasXY[];
    findInRange<T extends HasXY>(positions: T[], range: number): T[];
    findClosestByRange<T extends HasXY>(positions: T[]): T | null;
    findClosestByPath<T extends HasXY>(positions: T[], opts?: SearchPathOpts): T | null;
    getRangeTo(pos: HasXY): number;
}

export class Creep extends GameObject {
    body: { type: BodyPartType; hits: number; }[];
    fatigue: number;
    hits: number;
    hitsMax: number;
    my: boolean;
    store: Store;

    attack(target: Creep | Structure): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE | typeof ERR_NO_BODYPART;
    build<T extends Structure>(target: ConstructionSite<T>): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_RESOURCES | typeof ERR_INVALID_TARGET |
        typeof ERR_NOT_IN_RANGE | typeof ERR_NO_BODYPART;
    drop(resourceType: string, amount?: number): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_RESOURCES | typeof ERR_INVALID_ARGS;
    harvest(target: Source): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_RESOURCES | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE |
        typeof ERR_NO_BODYPART;
    heal(target: Creep): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE | typeof ERR_NO_BODYPART;
    move(direction: Direction): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_ARGS | typeof ERR_TIRED | typeof ERR_NO_BODYPART;
    moveTo(target: HasXY, opts?: FindPathOpts): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_TIRED | typeof ERR_NO_BODYPART;
    pickup(target: Resource): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_FULL | typeof ERR_NOT_IN_RANGE;
    pull(target: Creep): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE;
    rangedAttack(target: Creep | Structure): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE | typeof ERR_NO_BODYPART;
    rangedHeal(target: Creep): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_INVALID_TARGET | typeof ERR_NOT_IN_RANGE | typeof ERR_NO_BODYPART;
    rangedMassAttack(): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NO_BODYPART;
    transfer(target: Creep | Structure, resourceType: ResourceType, amount?: number): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_RESOURCES |
        typeof ERR_INVALID_TARGET | typeof ERR_FULL | typeof ERR_NOT_IN_RANGE | typeof ERR_INVALID_ARGS;
    withdraw(target: Creep | Structure, resourceType: ResourceType, amount?: number): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_RESOURCES |
        typeof ERR_INVALID_TARGET | typeof ERR_FULL | typeof ERR_NOT_IN_RANGE | typeof ERR_INVALID_ARGS;
}

export abstract class Structure extends GameObject {
    hits: number;
    hitsMax: number;
}

export abstract class OwnedStructure extends Structure { my: boolean; }

export class StructureTower extends OwnedStructure {
    store: Store;
    cooldown: number;

    attack(target: Creep | Structure): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_ENERGY | typeof ERR_INVALID_TARGET | typeof ERR_TIRED;
    heal(target: Creep): typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_ENERGY | typeof ERR_INVALID_TARGET | typeof ERR_TIRED;
}

export class StructureSpawn extends OwnedStructure {
    store: Store;

    spawnCreep(body: BodyPartType[]): { error: number } | { object: Creep } | typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NOT_ENOUGH_ENERGY |
        typeof ERR_INVALID_ARGS;
}

export class StructureContainer extends OwnedStructure { store: Store; }

export class StructureWall extends Structure {}

export class StructureExtension extends OwnedStructure { store: Store; }

export class StructureRampart extends OwnedStructure {}

export class ConstructionSite<T extends Structure> extends GameObject {
    my: boolean;
    progress: number;
    progressTotal: number;
    structure: T;

    remove(): void;
}

export class Resource extends GameObject {
    resourceType: string;
    amount: number;
}

export class Source extends GameObject {
    energy: number;
    energyCapacity: number;
}

export class Store {
    getCapacity(resource?: ResourceType): number;
    getFreeCapacity(resource?: ResourceType): number;
    getUsedCapacity(resource?: ResourceType): number;
}

export class Flag extends GameObject { my?: boolean; }

export class BodyPart extends GameObject { type: BodyPartType; }
