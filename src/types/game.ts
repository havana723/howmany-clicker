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

  guildStates: [
    {
      guild: {
        id: "boardGame",
        displayName: "보드게임 소모임",
        bonus: [0, 0.1, 0.5, 1, 3],
        cost: [10, 100, 1000, 10000, 100000],
      },
      level: 0,
    },
    {
      guild: {
        id: "camera",
        displayName: "필카소",
        bonus: [0, 0.1, 0.5, 1, 3],
        cost: [10, 100, 1000, 10000, 100000],
      },
      level: 0,
    },
    {
      guild: {
        id: "terraforming",
        displayName: "화성관측연구부",
        bonus: [0, 0.1, 0.5, 1, 3],
        cost: [10, 100, 1000, 10000, 100000],
      },
      level: 0,
    },
    {
      guild: {
        id: "humor",
        displayName: "아재개그 소모임",
        bonus: [0, 0.1, 0.5, 1, 3],
        cost: [10, 100, 1000, 10000, 100000],
      },
      level: 0,
    },
  ],

  startTime: new Date(),
};
