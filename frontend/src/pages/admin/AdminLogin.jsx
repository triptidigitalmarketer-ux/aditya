import { useState } from "react";
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, Lock } from "lucide-react";
import { useAuth } from "@/auth";
import { formatApiError } from "@/api";

const AdminLogin = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={location.state?.from?.pathname || "/admin"} replace />;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success("Welcome back.");
      navigate("/admin", { replace: true });
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full border border-ivory/20 bg-navy px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

  return (
    <div data-testid="admin-login-page" className="flex min-h-screen items-center justify-center bg-navy-deep px-4 grain relative">
      <div className="w-full max-w-md border border-ivory/10 bg-navy p-10 shadow-2xl">
        <div className="flex flex-col items-start">
          <Lock className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <h1 className="mt-5 font-serif text-3xl text-ivory">Chamber Dashboard</h1>
          <p className="mt-2 text-sm text-ivory/60">Restricted access — authorised sign-in only.</p>
        </div>
        <form onSubmit={submit} data-testid="admin-login-form" className="mt-8 space-y-4">
          <input
            data-testid="admin-email-input"
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
          />
          <input
            data-testid="admin-password-input"
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={inputCls}
          />
          <button
            data-testid="admin-login-submit-btn"
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy transition-all duration-300 hover:bg-gold-dark hover:text-white active:scale-95 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Sign In
          </button>
        </form>
        <Link to="/" data-testid="admin-back-to-site" className="mt-6 block text-center text-xs uppercase tracking-wider text-ivory/50 transition-colors hover:text-gold">
          ← Back to Website
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
