import { Guild } from "../types/perClick";

export const guilds: Guild[] = [
  {
    id: "boardGame",
    displayName: "보드게임 소모임",
    bonus: [0, 0.1, 0.5, 1, 3],
    cost: [10, 100, 1000, 10000, 100000],
  },
  {
    id: "camera",
    displayName: "필카소",
    bonus: [0, 0.1, 0.5, 1, 3],
    cost: [10, 100, 1000, 10000, 100000],
  },
  {
    id: "terraforming",
    displayName: "화성관측연구부",
    bonus: [0, 0.1, 0.5, 1, 3],
    cost: [10, 100, 1000, 10000, 100000],
  },
  {
    id: "humor",
    displayName: "아재개그 소모임",
    bonus: [0, 0.1, 0.5, 1, 3],
    cost: [10, 100, 1000, 10000, 100000],
  },
];
