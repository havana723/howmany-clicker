export interface Weapon {
  id: string;
  displayName: string;
  defaultNumber: number;
  constant: number;
}

export interface WeaponState {
  weapon: Weapon;
  level: number;
}
