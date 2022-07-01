import { Weapon } from "../types/perSecond";

export const weapons: Weapon[] = [
  {
    id: "boardGame",
    displayName: "보드게임",
    defaultNumber: 1.2,
    constant: 1.5,
  },
  {
    id: "camera",
    displayName: "카메라",
    defaultNumber: 10,
    constant: 1.7,
  },
  {
    id: "terraforming",
    displayName: "테라포밍 마스",
    defaultNumber: 100,
    constant: 1.9,
  },
  {
    id: "mahjong",
    displayName: "마작패",
    defaultNumber: 1000,
    constant: 2.1,
  },
  {
    id: "server",
    displayName: "쿠아 서버",
    defaultNumber: 10000,
    constant: 2.3,
  },
  {
    id: "kawaii",
    displayName: "규호는 귀엽다",
    defaultNumber: 1000000,
    constant: 2.5,
  },
];
