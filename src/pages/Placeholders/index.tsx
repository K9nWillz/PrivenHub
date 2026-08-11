import { Route } from "react-router";
import { PlaceholderPage } from "../../components/common/PlaceholderPage";
import { 
  MessageSquare, Store, BookOpen, Target, Sword, 
  Wallet, Coins, Users, UserCircle, Settings, Gift 
} from "lucide-react";

export const PlaceholderRoutes = () => (
  <>
    <Route path="/feed" element={
      <PlaceholderPage 
        title="Priven Feed" 
        description="Connect with the community, share achievements, and stay updated."
        featureKey="feed"
        icon={<MessageSquare size={24} />}
        cards={[{title: "Recent Posts"}, {title: "Trending"}, {title: "Announcements"}]}
      />
    } />
    <Route path="/store" element={
      <PlaceholderPage 
        title="Priven Store" 
        description="Exclusive merchandise, digital assets, and power-ups."
        featureKey="store"
        icon={<Store size={24} />}
        cards={[{title: "Featured Item"}, {title: "Apparel"}, {title: "Digital Assets"}]}
      />
    } />
    <Route path="/learn" element={
      <PlaceholderPage 
        title="Learn & Earn" 
        description="Expand your knowledge and earn rewards while doing it."
        featureKey="learnEarn"
        icon={<BookOpen size={24} />}
        cards={[{title: "Daily Lesson"}, {title: "Blockchain Basics"}, {title: "Trading 101"}]}
      />
    } />
    <Route path="/quests" element={
      <PlaceholderPage 
        title="Quests & Raids" 
        description="Complete daily objectives and participate in community raids."
        featureKey="quests"
        icon={<Target size={24} />}
        cards={[{title: "Daily Quests"}, {title: "Weekly Raid"}, {title: "Achievements"}]}
      />
    } />
    <Route path="/clans" element={
      <PlaceholderPage 
        title="Clans" 
        description="Form alliances, compete in prize pools, and dominate."
        featureKey="clans"
        icon={<Sword size={24} />}
        cards={[{title: "My Clan"}, {title: "Leaderboard"}, {title: "Upcoming Contests"}]}
      />
    } />
    <Route path="/wallet" element={
      <PlaceholderPage 
        title="Priven Wallet" 
        description="Your Priven Wallet is being built. Manage your assets securely."
        featureKey="wallet"
        icon={<Wallet size={24} />}
        cards={[
          {title: "Balance"}, {title: "Buy"}, {title: "Swap"}, 
          {title: "Transfer"}, {title: "Receive"}, {title: "Stake"}
        ]}
      />
    } />
    <Route path="/points" element={
      <PlaceholderPage 
        title="Priven Points" 
        description="Mine, track, and redeem your Priven Points."
        featureKey="points"
        icon={<Coins size={24} />}
        cards={[{title: "Current Balance"}, {title: "Mining Status"}, {title: "History"}]}
      />
    } />
    <Route path="/followers" element={
      <PlaceholderPage 
        title="Followers & Friends" 
        description="Build your network within the Priven ecosystem."
        featureKey="followers"
        icon={<Users size={24} />}
        cards={[{title: "Following"}, {title: "Followers"}, {title: "Suggestions"}]}
      />
    } />
    <Route path="/referrals" element={
      <PlaceholderPage 
        title="Referral Program" 
        description="Invite friends and earn recurring rewards."
        featureKey="referrals"
        icon={<Gift size={24} />}
        cards={[{title: "Your Code"}, {title: "Total Earned"}, {title: "Invited Users"}]}
      />
    } />
    <Route path="/profile" element={
      <PlaceholderPage 
        title="My Profile" 
        description="Manage your public persona and preferences."
        featureKey="profile"
        icon={<UserCircle size={24} />}
        cards={[{title: "Profile Info"}, {title: "Statistics"}, {title: "Badges"}]}
      />
    } />
    <Route path="/settings" element={
      <PlaceholderPage 
        title="Settings" 
        description="Account preferences and security."
        featureKey="settings"
        icon={<Settings size={24} />}
        cards={[{title: "Account"}, {title: "Notifications"}, {title: "Privacy"}]}
      />
    } />
  </>
);
