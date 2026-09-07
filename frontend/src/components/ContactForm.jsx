import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { API, formatApiError } from "@/api";

const MATTERS = [
  "Criminal Law & Defence",
  "Bail / Anticipatory Bail",
  "FIR Quashing",
  "Divorce & Family Law",
  "Maintenance / Child Custody",
  "Property / Civil Dispute",
  "RERA / Builder Matter",
  "Cheque Bounce (Sec. 138 NI Act)",
  "Debt Recovery",
  "Corporate / Commercial",
  "Contracts & Agreements",
  "Other Legal Matter",
];

const inputCls =
  "w-full border border-navy/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

const ContactForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", matter: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/enquiries", form);
      toast.success(data.message);
      setDone(true);
      setForm({ name: "", phone: "", email: "", matter: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  if (done)
    return (
      <div data-testid="enquiry-success" className="border border-gold/40 bg-cream p-8 text-center">
        <p className="font-serif text-2xl text-navy">Enquiry Received</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          Thank you. The chamber will review your matter and get in touch with you shortly. If your matter is
          urgent — a court date or a notice deadline — please mention it when we connect.
        </p>
        <button
          data-testid="send-another-enquiry-btn"
          onClick={() => setDone(false)}
          className="mt-6 border border-navy px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-ivory"
        >
          Send Another Enquiry
        </button>
      </div>
    );

  return (
    <form data-testid="contact-form" onSubmit={submit} className={compact ? "space-y-4" : "space-y-5"}>
      <div className={`grid grid-cols-1 gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input data-testid="contact-name-input" required minLength={2} placeholder="Full Name" value={form.name} onChange={set("name")} className={inputCls} />
        <input data-testid="contact-phone-input" required minLength={6} placeholder="Phone Number" value={form.phone} onChange={set("phone")} className={inputCls} />
      </div>
      <div className={`grid grid-cols-1 gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input data-testid="contact-email-input" required type="email" placeholder="Email Address" value={form.email} onChange={set("email")} className={inputCls} />
        <select data-testid="contact-matter-select" required value={form.matter} onChange={set("matter")} className={inputCls}>
          <option value="" disabled>Legal Matter / Practice Area</option>
          {MATTERS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <textarea
        data-testid="contact-message-input"
        required
        minLength={5}
        rows={compact ? 3 : 5}
        placeholder="Brief Description of the Matter"
        value={form.message}
        onChange={set("message")}
        className={inputCls}
      />
      <button
        data-testid="contact-submit-btn"
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory shadow-md transition-all duration-300 hover:bg-navy-light active:scale-95 disabled:opacity-60"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
};

export default ContactForm;
