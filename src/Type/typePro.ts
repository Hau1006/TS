// TypeScript pro tip: accept any string,
//  but suggest some specific values on autocomplete.
export type StringWithAutocomplete<T> = T | (string & Record<never, never>)
type Fruit = StringWithAutocomplete<"apple" | "orange" | "banana">
const apple: Fruit = "apple"
const banana: Fruit = "banana"
const orange: Fruit = "orange"
const fruit: Fruit = ""