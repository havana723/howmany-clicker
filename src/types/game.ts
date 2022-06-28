import { guilds } from "../constants/perClick";
import { weapons } from "../constants/perSecond";
import { GuildState } from "./perClick";
import { WeaponState } from "./perSecond";

export interface GameState {
  howmany: number;

  perClick: number;
  perSecond: number;

  guildStates: GuildState[];
  weaponStates: WeaponState[];

  startTime: Date;
}

export const defaultState: GameState = {
  howmany: 0,

  perClick: 1,
  perSecond: 0,

  guildStates: guilds.map((g) => ({
    guild: g,
    level: 0,
  })) as unknown as GuildState[],
  weaponStates: weapons.map((w) => ({
    weapon: w,
    level: 0,
  })) as unknown as WeaponState[],

  startTime: new Date(),
};
