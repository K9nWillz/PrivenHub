import { Routes, Route } from "react-router";
import { ProtectedRoute, PublicRoute } from "../components/common/ProtectedRoute";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

// Placeholder imports - we will create these files next
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Auth/Login";
import { SignUp } from "../pages/Auth/SignUp";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import { Dashboard } from "../pages/Dashboard";
import { PlaceholderRoutes } from "../pages/Placeholders";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
      
      {/* Auth Routes */}
      <Route path="/login" element={
        <PublicRoute>
          <AuthLayout title="Welcome back" subtitle="Sign in to your Priven account">
            <Login />
          </AuthLayout>
        </PublicRoute>
      } />
      <Route path="/signup" element={
        <PublicRoute>
          <AuthLayout title="Create an account" subtitle="Join the Priven ecosystem">
            <SignUp />
          </AuthLayout>
        </PublicRoute>
      } />
      <Route path="/forgot-password" element={
        <PublicRoute>
          <AuthLayout title="Reset Password" subtitle="Enter your email to receive a reset link">
            <ForgotPassword />
          </AuthLayout>
        </PublicRoute>
      } />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* We use a single file with exports for the placeholders to save time */}
        {PlaceholderRoutes()}
      </Route>
    </Routes>
  );
};
