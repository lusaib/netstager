//define objects with any keys
export type ObjectTypeWithAnyKeyValues = {
  [key: string]: any;
};

//when we want to specify a number prop to include within a range .Eg : Range< 1 , 100 >
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

//type that accepts only negative numbers
export type Negative<T extends number> = T extends 0
  ? T
  : T extends -1
  ? T
  : never;
