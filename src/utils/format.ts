export function numberToString(howmany: number): string {
  if (howmany < 1000) {
    if (Number.isInteger(howmany)) {
      return howmany.toLocaleString();
    }
    return howmany.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
  if (howmany < 100000) return howmany.toLocaleString();
  return howmany.toExponential(2);
}
