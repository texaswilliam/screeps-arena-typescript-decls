import { CostMatrix } from '/game/path-finder';
import { GameObject } from '/game/prototypes';

interface HasID { id: string; }

interface HasXY { x: number; y: number; }

interface HeapStatistics {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: number;
    externally_allocated_size: number;
}

interface FindPathOpts extends SearchPathOpts {
    ignore?: GameObject[];
}

interface SearchPathOpts {
    costMatrix?: CostMatrix;
    plainCost?: number;
    swampCost?: number;
    flee?: boolean;
    maxOps?: number;
    maxCost?: number;
    heuristicWeight?: number;
}
