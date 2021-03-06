import { badges } from "../constants/badges";
import { guilds } from "../constants/perClick";
import { weapons } from "../constants/perSecond";
import { BadgeState } from "./bagde";
import { GuildState } from "./perClick";
import { WeaponState } from "./perSecond";

export interface GameState {
  version: number;

  howmany: number;

  perClick: number;
  perSecond: number;

  guildStates: GuildState[];
  weaponStates: WeaponState[];
  badgeStates: BadgeState[];

  clicks: number;
  purchases: number;

  startTime: Date;
}

export const defaultState: GameState = {
  version: 1,
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
  badgeStates: badges.map((b) => ({
    badge: b,
    unlocked: false,
  })) as unknown as BadgeState[],

  clicks: 0,
  purchases: 0,

  startTime: new Date(),
};
