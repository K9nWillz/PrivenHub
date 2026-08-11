import { Link } from 'react-router';
import { Button } from "../../components/ui/Button";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-priven-black flex flex-col">
      {/* Navbar */}
      <header className="flex h-20 items-center justify-between px-6 lg:px-12 border-b border-priven-muted">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-priven-lime rounded-lg shadow-[0_0_15px_rgba(0,255,102,0.3)]" />
          <span className="text-2xl font-bold text-priven-white tracking-tight">Priven Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-priven-white hover:text-priven-lime transition-colors">
            Log in
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-priven-lime/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-priven-muted bg-priven-surface px-4 py-1.5 text-sm font-medium text-priven-lime mb-4">
            <span className="flex w-2 h-2 rounded-full bg-priven-lime mr-2 animate-pulse"></span>
            Welcome to the future of the Priven ecosystem
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-priven-white">
            Your gateway to <br className="hidden md:block" />
            <span className="text-priven-lime drop-shadow-[0_0_25px_rgba(0,255,102,0.4)]">the Priven ecosystem.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-priven-muted-text max-w-2xl mx-auto">
            Connect, compete, learn, and earn. Priven Hub is the central command center for your entire Priven experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Join the Hub
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
