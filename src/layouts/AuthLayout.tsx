import { ReactNode } from "react";
import { Link } from "react-router";

export const AuthLayout = ({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) => {
  return (
    <div className="min-h-screen bg-priven-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-priven-lime rounded-md" />
          <span className="text-2xl font-bold tracking-tight text-priven-white">Priven Hub</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-priven-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-center text-sm text-priven-muted-text">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-priven-surface py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-priven-muted">
          {children}
        </div>
      </div>
    </div>
  );
};
