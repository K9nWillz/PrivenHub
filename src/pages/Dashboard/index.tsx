import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { useAuth } from "../../contexts/AuthContext";
import { 
  Flame, Coins, Target, Users, Sword, 
  ArrowUpRight, Gift, Newspaper
} from "lucide-react";

export const Dashboard = () => {
  const { userProfile } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-priven-white">
          Welcome back, {userProfile?.displayName || 'User'}
        </h1>
        <p className="text-priven-muted-text mt-1">Here is what is happening in the Priven ecosystem today.</p>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="glow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-priven-muted-text">Priven Points</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h2 className="text-3xl font-bold text-priven-white">{userProfile?.points || 0}</h2>
                  <span className="text-sm text-priven-lime">+12 today</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-priven-lime/10 flex items-center justify-center text-priven-lime">
                <Coins size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="glow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-priven-muted-text">Current Streak</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h2 className="text-3xl font-bold text-priven-white">{userProfile?.streak || 0} Days</h2>
                  <span className="text-sm text-priven-muted-text">Keep it up!</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-priven-gold/10 flex items-center justify-center text-priven-gold">
                <Flame size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="glow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-priven-muted-text">Referral Code</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h2 className="text-2xl font-bold text-priven-white tracking-wider">{userProfile?.referralCode || '---'}</h2>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-priven-surface border border-priven-muted flex items-center justify-center text-priven-white">
                <Gift size={20} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>Daily Quests</CardTitle>
                <CardDescription>Complete objectives to earn points.</CardDescription>
              </div>
              <Target className="text-priven-muted-text" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                {[
                  { name: "Check in to Priven Hub", points: 10, done: true },
                  { name: "Read an article in Learn", points: 25, done: false },
                  { name: "Share a post on Feed", points: 50, done: false }
                ].map((quest, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-priven-muted bg-priven-black/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${quest.done ? 'bg-priven-lime border-priven-lime text-priven-black' : 'border-priven-muted text-transparent'}`}>
                        {quest.done && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className={quest.done ? 'text-priven-muted-text line-through' : 'text-priven-white'}>{quest.name}</span>
                    </div>
                    <Badge variant={quest.done ? 'outline' : 'lime'}>+{quest.points} pts</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>Community Feed</CardTitle>
                <CardDescription>Latest updates from the ecosystem.</CardDescription>
              </div>
              <Newspaper className="text-priven-muted-text" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4 opacity-70 pointer-events-none">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 rounded-lg border border-priven-muted bg-priven-black/50 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-priven-muted animate-pulse" />
                      <div>
                        <div className="h-4 w-24 bg-priven-muted rounded animate-pulse" />
                        <div className="h-3 w-16 bg-priven-muted rounded mt-1 animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-priven-muted rounded animate-pulse" />
                      <div className="h-4 w-4/5 bg-priven-muted rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Badge variant="gold">Module under development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Sword size={20} className="text-priven-muted-text" />
                Clan Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-priven-muted-text mb-4">You haven't joined a clan yet.</p>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users size={20} className="text-priven-muted-text" />
                Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-priven-muted-text">Following</span>
                  <span className="font-medium text-priven-white">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-priven-muted-text">Followers</span>
                  <span className="font-medium text-priven-white">0</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-priven-muted">
                  <span className="text-sm text-priven-muted-text">Referrals</span>
                  <span className="font-medium text-priven-white">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-priven-lime/5 border-priven-lime/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-priven-lime">Explore Apps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-priven-black border border-priven-muted hover:border-priven-lime/50 transition-colors group">
                <span className="font-medium text-priven-white group-hover:text-priven-lime transition-colors">PFL27</span>
                <ArrowUpRight size={16} className="text-priven-muted-text group-hover:text-priven-lime" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-priven-black border border-priven-muted hover:border-priven-lime/50 transition-colors group">
                <span className="font-medium text-priven-white group-hover:text-priven-lime transition-colors">Priven Pundits</span>
                <ArrowUpRight size={16} className="text-priven-muted-text group-hover:text-priven-lime" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
