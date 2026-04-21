import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up authentication
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-base">H</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">HighBizz</span>
          </Link>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-display font-bold text-foreground mb-1 text-center">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Log in to your HighBizz dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm">
              Log in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-col gap-3">
            <div className="h-px bg-border" />
            <p className="text-xs text-muted-foreground text-center">
              Are you a team member?{" "}
              <Link to="/team" className="text-primary font-medium hover:underline">
                Go to Team Dashboard
              </Link>
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Don't have an account?{" "}
              <Link to="/contact" className="text-primary font-medium hover:underline">
                Book a strategy call
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to HighBizz.co
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
