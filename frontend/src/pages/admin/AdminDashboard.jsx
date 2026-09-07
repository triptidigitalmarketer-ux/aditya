import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { LogOut, Inbox, FileText, Plus, Trash2, X, Loader2 } from "lucide-react";
import { useAuth } from "@/auth";
import { API, formatApiError } from "@/api";

const STATUSES = ["new", "contacted", "in-progress", "archived"];
const statusCls = {
  new: "bg-gold/20 text-gold-dark border-gold/40",
  contacted: "bg-blue-50 text-blue-700 border-blue-200",
  "in-progress": "bg-emerald-50 text-emerald-700 border-emerald-200",
  archived: "bg-gray-100 text-gray-500 border-gray-200",
};

const emptyArticle = { title: "", slug: "", excerpt: "", content: "", meta_description: "", status: "draft" };

const inputCls =
  "w-full border border-navy/15 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [tab, setTab] = useState("enquiries");
  const [enquiries, setEnquiries] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // article being edited or 'new'

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [eq, ar] = await Promise.all([API.get("/enquiries"), API.get("/admin/articles")]);
      setEnquiries(eq.data);
      setArticles(ar.data);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const setStatus = async (id, status) => {
    try {
      await API.patch(`/enquiries/${id}`, { status });
      setEnquiries((list) => list.map((e) => (e.id === id ? { ...e, status } : e)));
    } catch (err) {
      toast.error(formatApiError(err));
    }
  };

  const removeEnquiry = async (id) => {
    if (!window.confirm("Delete this enquiry permanently?")) return;
    try {
      await API.delete(`/enquiries/${id}`);
      setEnquiries((list) => list.filter((e) => e.id !== id));
      toast.success("Enquiry deleted.");
    } catch (err) {
      toast.error(formatApiError(err));
    }
  };

  const saveArticle = async (form) => {
    try {
      if (form.id) {
        await API.put(`/admin/articles/${form.id}`, form);
        toast.success("Article updated.");
      } else {
        await API.post("/admin/articles", form);
        toast.success("Article created.");
      }
      setEditing(null);
      load();
    } catch (err) {
      toast.error(formatApiError(err));
    }
  };

  const removeArticle = async (id) => {
    if (!window.confirm("Delete this article permanently?")) return;
    try {
      await API.delete(`/admin/articles/${id}`);
      setArticles((list) => list.filter((a) => a.id !== id));
      toast.success("Article deleted.");
    } catch (err) {
      toast.error(formatApiError(err));
    }
  };

  return (
    <div data-testid="admin-dashboard" className="min-h-screen bg-ivory">
      <header className="border-b border-navy/10 bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="font-serif text-lg text-ivory">Aditya Gaur — Chamber Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-ivory/50 sm:block" data-testid="admin-user-email">{user?.email}</span>
            <button
              data-testid="admin-logout-btn"
              onClick={logout}
              className="inline-flex items-center gap-2 border border-ivory/25 px-4 py-2 text-xs uppercase tracking-wider text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl gap-1 px-4 sm:px-6">
          {[
            { id: "enquiries", label: "Enquiries", icon: Inbox, count: enquiries.filter((e) => e.status === "new").length },
            { id: "articles", label: "Legal Insights", icon: FileText, count: articles.length },
          ].map((t) => (
            <button
              key={t.id}
              data-testid={`admin-tab-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-medium uppercase tracking-wider transition-colors ${
                tab === t.id ? "border-gold text-gold" : "border-transparent text-ivory/60 hover:text-ivory"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
              {t.count > 0 && <span className="bg-gold/20 px-2 py-0.5 text-[10px] text-gold">{t.count}</span>}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-gold-dark" />
          </div>
        ) : tab === "enquiries" ? (
          <div data-testid="enquiries-panel">
            {enquiries.length === 0 ? (
              <div className="border border-dashed border-navy/20 bg-cream p-14 text-center">
                <Inbox className="mx-auto h-8 w-8 text-gold-dark" strokeWidth={1.25} />
                <p className="mt-4 font-serif text-xl text-navy">No enquiries yet</p>
                <p className="mt-2 text-sm text-charcoal/60">New consultation requests from the website will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiries.map((e) => (
                  <div key={e.id} data-testid={`enquiry-${e.id}`} className="border border-navy/10 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-serif text-lg text-navy">{e.name}</p>
                        <p className="mt-1 text-xs text-charcoal/60">
                          {e.phone} · {e.email} · {new Date(e.created_at).toLocaleString("en-IN")}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select
                          data-testid={`enquiry-status-${e.id}`}
                          value={e.status}
                          onChange={(ev) => setStatus(e.id, ev.target.value)}
                          className={`border px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${statusCls[e.status] || statusCls.new}`}
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <button data-testid={`enquiry-delete-${e.id}`} onClick={() => removeEnquiry(e.id)} className="p-2 text-charcoal/40 transition-colors hover:text-red-600" aria-label="Delete enquiry">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-xs font-mono uppercase tracking-wider text-gold-dark">{e.matter}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{e.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div data-testid="articles-panel">
            {editing ? (
              <ArticleForm
                initial={editing === "new" ? emptyArticle : editing}
                onSave={saveArticle}
                onCancel={() => setEditing(null)}
              />
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-charcoal/60">{articles.length} article{articles.length !== 1 ? "s" : ""} — published articles appear under Legal Insights.</p>
                  <button
                    data-testid="new-article-btn"
                    onClick={() => setEditing("new")}
                    className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-navy-light"
                  >
                    <Plus className="h-4 w-4" /> New Article
                  </button>
                </div>
                {articles.length === 0 ? (
                  <div className="border border-dashed border-navy/20 bg-cream p-14 text-center">
                    <FileText className="mx-auto h-8 w-8 text-gold-dark" strokeWidth={1.25} />
                    <p className="mt-4 font-serif text-xl text-navy">No articles yet</p>
                    <p className="mt-2 text-sm text-charcoal/60">Draft your first Legal Insight and publish it when ready.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {articles.map((a) => (
                      <div key={a.id} data-testid={`article-row-${a.id}`} className="flex flex-wrap items-center justify-between gap-4 border border-navy/10 bg-white p-5">
                        <div>
                          <p className="font-serif text-lg text-navy">{a.title}</p>
                          <p className="mt-1 text-xs text-charcoal/50">
                            /legal-insights/{a.slug} ·{" "}
                            <span className={a.status === "published" ? "font-semibold text-emerald-700" : "font-semibold text-gold-dark"}>
                              {a.status}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button data-testid={`article-edit-${a.id}`} onClick={() => setEditing(a)} className="border border-navy/20 px-4 py-2 text-xs uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-ivory">
                            Edit
                          </button>
                          <button data-testid={`article-delete-${a.id}`} onClick={() => removeArticle(a.id)} className="p-2 text-charcoal/40 transition-colors hover:text-red-600" aria-label="Delete article">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

const ArticleForm = ({ initial, onSave, onCancel }) => {
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <form onSubmit={submit} data-testid="article-form" className="border border-navy/10 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-navy">{form.id ? "Edit Article" : "New Article"}</h2>
        <button type="button" data-testid="article-form-cancel" onClick={onCancel} className="p-2 text-charcoal/50 hover:text-navy" aria-label="Cancel">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input data-testid="article-title-input" required minLength={3} placeholder="Article title" value={form.title} onChange={set("title")} className={inputCls} />
        <input data-testid="article-slug-input" placeholder="URL slug (auto if blank)" value={form.slug} onChange={set("slug")} className={inputCls} />
      </div>
      <textarea data-testid="article-excerpt-input" rows={2} placeholder="Excerpt — one or two sentences shown in listings" value={form.excerpt} onChange={set("excerpt")} className={`${inputCls} mt-4`} />
      <textarea
        data-testid="article-content-input"
        rows={14}
        placeholder="Article content. Basic HTML is supported: <h2>, <h3>, <p>, <ul><li>, <ol><li>"
        value={form.content}
        onChange={set("content")}
        className={`${inputCls} mt-4 font-mono text-xs leading-relaxed`}
      />
      <input data-testid="article-meta-input" placeholder="Meta description for SEO (optional)" value={form.meta_description} onChange={set("meta_description")} className={`${inputCls} mt-4`} />
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <select data-testid="article-status-select" value={form.status} onChange={set("status")} className={inputCls + " w-auto"}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button
          data-testid="article-save-btn"
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-dark hover:text-white disabled:opacity-60"
        >
          {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          {form.id ? "Save Changes" : "Create Article"}
        </button>
      </div>
    </form>
  );
};

export default AdminDashboard;
