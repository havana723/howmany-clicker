export interface Guild {
  id: string;
  displayName: string;
  bonus: number[];
  cost: number[];
}

export interface GuildState {
  guild: Guild;
  level: number;
}
