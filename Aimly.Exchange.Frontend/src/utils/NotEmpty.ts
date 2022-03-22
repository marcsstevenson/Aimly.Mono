// A utility function returns if a value is null or undefined
// and returns a type without | null | undefined.
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export { notEmpty }