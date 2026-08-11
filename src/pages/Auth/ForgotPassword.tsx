import { useState } from "react";
import { Link } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your inbox for further instructions");
    } catch (err: any) {
      setError(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-priven-red bg-priven-red/10 border border-priven-red/20 rounded-lg">
            {error}
          </div>
        )}
        {message && (
          <div className="p-3 text-sm text-priven-lime bg-priven-lime/10 border border-priven-lime/20 rounded-lg">
            {message}
          </div>
        )}
        <Input
          label="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <Button type="submit" className="w-full" isLoading={loading}>
          Reset Password
        </Button>
      </form>

      <p className="text-center text-sm text-priven-muted-text">
        Remember your password?{' '}
        <Link to="/login" className="font-medium text-priven-lime hover:text-priven-lime-hover">
          Sign in
        </Link>
      </p>
    </div>
  );
};
