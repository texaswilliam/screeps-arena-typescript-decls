import { ATTACK, BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, CARRY, ERR_BUSY, ERR_FULL, ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_NAME_EXISTS, ERR_NO_BODYPART,
    ERR_NO_PATH, ERR_NOT_ENOUGH_ENERGY, ERR_NOT_ENOUGH_EXTENSIONS, ERR_NOT_ENOUGH_RESOURCES, ERR_NOT_FOUND, ERR_NOT_IN_RANGE, ERR_NOT_OWNER, ERR_TIRED, HEAL,
    LEFT, MOVE, OK, RANGED_ATTACK, RESOURCE_ENERGY, RIGHT, TERRAIN_SWAMP, TERRAIN_WALL, TOP, TOP_LEFT, TOP_RIGHT, TOUGH, WORK } from '/game/constants';

type BodyPartType = typeof MOVE | typeof RANGED_ATTACK | typeof HEAL | typeof ATTACK | typeof CARRY | typeof TOUGH | typeof WORK;
type Cost = number;
type Direction = typeof TOP | typeof TOP_RIGHT | typeof RIGHT | typeof BOTTOM_RIGHT | typeof BOTTOM | typeof BOTTOM_LEFT | typeof LEFT | typeof TOP_LEFT;
type Err = typeof OK | typeof ERR_NOT_OWNER | typeof ERR_NO_PATH | typeof ERR_NAME_EXISTS | typeof ERR_BUSY | typeof ERR_NOT_FOUND | typeof ERR_NOT_ENOUGH_ENERGY |
    typeof ERR_NOT_ENOUGH_RESOURCES | typeof ERR_INVALID_TARGET | typeof ERR_FULL | typeof ERR_NOT_IN_RANGE | typeof ERR_INVALID_ARGS | typeof ERR_TIRED |
    typeof ERR_NO_BODYPART | typeof ERR_NOT_ENOUGH_EXTENSIONS;
type ObstacleObject = 'creep' | 'tower' | 'constructedWall' | 'spawn' | 'extension' | 'link';
type ResourceType = typeof RESOURCE_ENERGY;
type Terrain = typeof TERRAIN_WALL | typeof TERRAIN_SWAMP;
