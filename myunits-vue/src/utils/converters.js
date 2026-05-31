export function convertLength(value, from, to) {
  const factors = {
    m: 1,
    km: 1000,
    cm: 0.01
  }

  const meters = value * factors[from]
  return meters / factors[to]
}