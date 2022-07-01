export interface Guild {
  id: string;
  displayName: string;
  defaultNumber: number;
  constant: number;
}

export interface GuildState {
  guild: Guild;
  level: number;
}
