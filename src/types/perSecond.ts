export interface Weapon {
  id: string;
  displayName: string;
  bonus: number[];
  cost: number[];
}

export interface WeaponState {
  weapon: Weapon;
  level: number;
}
