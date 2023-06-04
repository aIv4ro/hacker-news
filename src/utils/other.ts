export function tryOrUndefined<T> (fn: () => T) {
  try {
    return fn()
  } catch (err) {
    return undefined
  }
}
