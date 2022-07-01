export function levelToBonus(
  defaultNumber: number,
  constant: number,
  level: number
) {
  const ret = Math.floor(Math.pow(defaultNumber, level));
  if (isFinite(ret)) return ret;
  return 1e308;
}

export function levelToCostGuild(
  defaultNumber: number,
  constant: number,
  level: number
) {
  const ret = Math.floor(Math.pow(defaultNumber * constant, level) * 5);
  if (isFinite(ret)) return ret;
  return 1e308;
}

export function levelToCostWeapon(
  defaultNumber: number,
  constant: number,
  level: number
) {
  const ret = Math.floor(Math.pow(defaultNumber * constant, level) * 30);
  if (isFinite(ret)) return ret;
  return 1e308;
}
