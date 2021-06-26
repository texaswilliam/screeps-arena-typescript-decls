import { HasXY, SearchPathOpts } from '/interfaces';

export function searchPath(origin: HasXY, goal: HasXY | number, options: SearchPathOpts): {
    path: HasXY[];
    ops: number;
    cost: number;
    incomplete: boolean;
}

export class CostMatrix {
    constructor();
    set(x: number, y: number, cost: number): void;
    get(x: number, y: number): number;
    clone(): CostMatrix;
}
