import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]): number {
    return queue.reduce<number>((state, update) => {
        if (typeof update === 'function') {
            return update(state);
        } else {
            return update;
        }
    }, baseState);
}
