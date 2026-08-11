import { Outlet, NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Store, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Sword, 
  Target, 
  Wallet, 
  Coins, 
  UserCircle,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { cn } from "../utils/cn";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Feed', href: '/feed', icon: MessageSquare },
  { name: 'Quests', href: '/quests', icon: Target },
  { name: 'Clans', href: '/clans', icon: Sword },
  { name: 'Store', href: '/store', icon: Store },
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Wallet', href: '/wallet', icon: Wallet },
  { name: 'Points', href: '/points', icon: Coins },
  { name: 'Followers', href: '/followers', icon: Users },
  { name: 'Profile', href: '/profile', icon: UserCircle },
];

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-priven-black flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-priven-surface border-r border-priven-muted transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:block",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-16 shrink-0 items-center px-6 border-b border-priven-muted justify-between lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-priven-lime rounded-md" />
              <span className="text-xl font-bold text-priven-white">Priven Hub</span>
            </div>
            <button 
              className="lg:hidden text-priven-muted-text hover:text-priven-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => cn(
                  "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive 
                    ? "bg-priven-lime/10 text-priven-lime" 
                    : "text-priven-muted-text hover:bg-priven-muted hover:text-priven-white"
                )}
              >
                <item.icon 
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                  )} 
                />
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-priven-muted">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="h-10 w-10 rounded-full bg-priven-muted flex items-center justify-center overflow-hidden">
                {userProfile?.photoURL ? (
                  <img src={userProfile.photoURL} alt="" className="h-full w-full object-cover" />
                ) : (
                  <UserCircle className="h-6 w-6 text-priven-muted-text" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-priven-white truncate">
                  {userProfile?.displayName}
                </p>
                <p className="text-xs text-priven-muted-text truncate">
                  @{userProfile?.username}
                </p>
              </div>
            </div>
            <button 
              onClick={logout}
              className="flex w-full items-center px-3 py-2 text-sm font-medium text-priven-muted-text rounded-lg hover:bg-priven-muted hover:text-priven-red transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden flex h-16 shrink-0 items-center border-b border-priven-muted bg-priven-surface px-4">
          <button
            type="button"
            className="text-priven-muted-text hover:text-priven-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-priven-lime rounded" />
            <span className="text-lg font-bold text-priven-white">Priven Hub</span>
          </div>
        </div>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
