import { TERRAIN_SWAMP, TERRAIN_WALL } from '/game/constants';
import { ConstructionSite, GameObject, Structure } from '/game/prototypes';
import { HasXY, HeapStatistics, FindPathOpts, SearchPathOpts } from '/interfaces';

export function getTime(): number;
export function getObjectById<T extends GameObject>(id: number): T | null;
export function getObjectsByPrototype<T extends GameObject>(prototype: { new(): T }): T[];
export function getHeapStatistics(): HeapStatistics;
export function getDirection(dx: number, dy: number): number;
export function findPath(fromPos: HasXY, toPos: HasXY, opts?: FindPathOpts): HasXY[];
export function getRange(a: HasXY, b: HasXY): number;
export function getTerrainAt(pos: HasXY): typeof TERRAIN_WALL | typeof TERRAIN_SWAMP | 0;
export function findInRange<T extends HasXY>(fromPos: HasXY, positions: T[], range: number): T[];
export function findClosestByRange<T extends HasXY>(fromPos: HasXY, positions: T[]): T | null;
export function findClosestByPath<T extends HasXY>(fromPos: HasXY, positions: T[], opts?: SearchPathOpts): T | null;
export function createConstructionSite<T extends Structure>(position: HasXY, prototype: { new(): T }): { object: ConstructionSite<T>; } | { error: number; };
