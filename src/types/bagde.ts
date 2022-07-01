export interface Badge {
  id: string;
  displayName: string;
  details: string;
}

export interface BadgeState {
  badge: Badge;
  unlocked: boolean;
}
