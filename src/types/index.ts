export type UserRole = 'user' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  username: string;
  displayName: string;
  photoURL?: string;
  createdAt: number;
  points: number;
  streak: number;
  referralCode: string;
  role: UserRole;
}

export type FeatureStatus = 'active' | 'coming-soon' | 'disabled';

export const FEATURE_FLAGS: Record<string, FeatureStatus> = {
  dashboard: 'active',
  feed: 'coming-soon',
  store: 'coming-soon',
  learnEarn: 'coming-soon',
  quests: 'coming-soon',
  clans: 'coming-soon',
  wallet: 'coming-soon',
  points: 'coming-soon',
  messages: 'coming-soon',
  followers: 'coming-soon',
  referrals: 'coming-soon',
  support: 'coming-soon',
  settings: 'active',
  profile: 'active',
};
