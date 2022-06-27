import { GuildState } from "./perClick";

export interface GameState {
  howmany: number;

  perClick: number;
  perSecond: number;

  guildStates: GuildState[];

  startTime: Date;
}

export const defaultState: GameState = {
  howmany: 0,

  perClick: 1,
  perSecond: 0,

  guildStates: [],

  startTime: new Date(),
};
