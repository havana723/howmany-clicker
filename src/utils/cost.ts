export function levelToBonus(
  defaultNumber: number,
  constant: number,
  level: number
) {
  return Math.floor(Math.pow(defaultNumber * 1.1, level));
}

export function levelToCostGuild(
  defaultNumber: number,
  constant: number,
  level: number
) {
  return Math.floor(Math.pow(defaultNumber * constant * 1.11, level) * 5);
}

export function levelToCostWeapon(
  defaultNumber: number,
  constant: number,
  level: number
) {
  return Math.floor(Math.pow(defaultNumber * constant * 1.11, level) * 30);
}
