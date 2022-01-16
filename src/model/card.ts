export interface CardPropertyValues<T> {
  [index: number]: T;
}

function propValues<T>(val1: T, val2: T, val3: T): CardPropertyValues<T> {
  return { 1: val1, 2: val2, 4: val3 };
}

export const NB_SHAPES = propValues<number>(1, 2, 3);
export const SHAPES = propValues<string>("diamond", "oval", "squiggle");
export const COLORS = propValues<string>("red", "blue", "green");
export const SHADINGS = propValues<string>("empty", "filled", "outlined");
