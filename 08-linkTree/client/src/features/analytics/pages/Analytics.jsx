import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  ExternalLink,
  Eye,
  Link as LinkIcon,
  LogOut,
  MousePointerClick,
  Plus,
  Trash2,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { getAuthUser, clearAuthUser } from "../../auth/utils/authStorage";
import ThemeToggle from "../../../shared/theme/ThemeToggle";
import { createLink, deleteLink, getAnalytics } from "../services/analytics.api";

const Analytics = () => {
  const navigate = useNavigate();
  const authUser = getAuthUser();
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [linkForm, setLinkForm] = useState({
    title: "",
    url: "",
  });
  const [formError, setFormError] = useState("");
  const [isCreatingLink, setIsCreatingLink] = useState(false);
  const [deletingLinkId, setDeletingLinkId] = useState("");

  const loadAnalytics = useCallback(() => {
    if (!authUser?.username) {
      return Promise.resolve();
    }

    return getAnalytics({ username: authUser.username })
      .then((data) => {
        setAnalytics(data);
        setError("");
      })
      .catch((apiError) => {
        setError(apiError.response?.data?.message || "Unable to load analytics");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [authUser?.username]);

  useEffect(() => {
    if (!authUser?.username) {
      navigate("/login", { replace: true });
      return;
    }

    loadAnalytics();
  }, [authUser?.username, loadAnalytics, navigate]);

  const maxDailyClicks = useMemo(() => {
    if (!analytics?.lastSevenDays?.length) {
      return 1;
    }

    return Math.max(...analytics.lastSevenDays.map((day) => day.clicks), 1);
  }, [analytics]);

  const handleLogout = () => {
    clearAuthUser();
    navigate("/login");
  };

  const handleLinkFormChange = (event) => {
    const { name, value } = event.target;

    setLinkForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleCreateLink = async (event) => {
    event.preventDefault();
    setIsCreatingLink(true);
    setFormError("");

    try {
      await createLink(linkForm);
      setLinkForm({
        title: "",
        url: "",
      });
      await loadAnalytics();
    } catch (apiError) {
      setFormError(apiError.response?.data?.message || "Unable to create link");
    } finally {
      setIsCreatingLink(false);
    }
  };

  const handleDeleteLink = async (linkId) => {
    setDeletingLinkId(linkId);
    setFormError("");

    try {
      await deleteLink({ linkId });
      await loadAnalytics();
    } catch (apiError) {
      setFormError(apiError.response?.data?.message || "Unable to delete link");
    } finally {
      setDeletingLinkId("");
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[var(--surface)] px-4 py-8 text-[var(--text)]">
        <div className="mx-auto max-w-6xl">Loading analytics...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[var(--surface)] px-4 py-8 text-[var(--text)]">
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--danger-border)] bg-[var(--danger-bg)] p-6 text-[var(--danger-text)]">
          {error}
        </div>
      </main>
    );
  }

  const { summary, lastSevenDays, links } = analytics;

  return (
    <main className="min-h-screen bg-[var(--surface)] px-4 py-8 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">Analytics Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              @{authUser.username}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <ThemeToggle />
            <Link
              to={`/${authUser.username}`}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              <Eye size={16} />
              View public page
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--surface)] transition hover:opacity-85"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <LinkIcon size={16} />
              Total Links
            </p>
            <strong className="mt-3 block text-3xl text-[var(--text)]">{summary.totalLinks}</strong>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <MousePointerClick size={16} />
              Total Clicks
            </p>
            <strong className="mt-3 block text-3xl text-[var(--text)]">{summary.totalClicks}</strong>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <TrendingUp size={16} />
              Avg. Clicks
            </p>
            <strong className="mt-3 block text-3xl text-[var(--text)]">{summary.averageClicks}</strong>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <Trophy size={16} />
              Top Link
            </p>
            <strong className="mt-3 block truncate text-lg text-[var(--text)]">
              {summary.topLink?.title || "No clicks yet"}
            </strong>
          </div>
        </section>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-[var(--text)]">
              <Plus size={20} />
              Add New Link
            </h2>
          </div>

          <form onSubmit={handleCreateLink} className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-end">
            <label className="block">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
                <LinkIcon size={16} />
                Title
              </span>
              <input
                type="text"
                name="title"
                value={linkForm.title}
                onChange={handleLinkFormChange}
                className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                placeholder="Portfolio"
                required
              />
            </label>

            <label className="block">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
                <ExternalLink size={16} />
                URL
              </span>
              <input
                type="url"
                name="url"
                value={linkForm.url}
                onChange={handleLinkFormChange}
                className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                placeholder="https://example.com"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isCreatingLink}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Plus size={18} />
              {isCreatingLink ? "Adding..." : "Add Link"}
            </button>
          </form>

          {formError ? (
            <p className="mt-4 rounded-md border border-[var(--danger-border)] bg-[var(--danger-bg)] px-4 py-3 text-sm text-[var(--danger-text)]">
              {formError}
            </p>
          ) : null}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-[var(--text)]">
                <Activity size={20} />
                Last 7 Days Activity
              </h2>
              <span className="text-sm text-[var(--muted)]">Clicks per day</span>
            </div>

            <div className="flex h-72 items-end gap-3">
              {lastSevenDays.map((day) => {
                const height = `${Math.max((day.clicks / maxDailyClicks) * 100, day.clicks ? 8 : 2)}%`;

                return (
                  <div key={day.date} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <div className="flex h-full w-full items-end rounded-md bg-[var(--panel-strong)] p-1">
                      <div
                        className="w-full rounded bg-[var(--accent)]"
                        style={{ height }}
                        title={`${day.clicks} clicks`}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[var(--text)]">{day.clicks}</p>
                      <p className="text-xs text-[var(--muted)]">{day.date.slice(5)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm">
            <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-[var(--text)]">
              <BarChart3 size={20} />
              Link Performance
            </h2>
            <div className="mt-5 space-y-4">
              {links.length ? (
                links.map((link) => {
                  const width = `${Math.max((link.clicks / Math.max(summary.topLink?.clicks || 1, 1)) * 100, link.clicks ? 8 : 2)}%`;

                  return (
                    <div key={link.id}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <a href={link.url} target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-center gap-2 truncate text-sm font-medium text-[var(--text)]">
                          <ExternalLink size={14} className="shrink-0 text-[var(--muted)]" />
                          {link.title}
                        </a>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className="text-sm text-[var(--muted)]">{link.clicks} clicks</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteLink(link.id)}
                            disabled={deletingLinkId === link.id}
                            className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--danger-border)] hover:bg-[var(--danger-bg)] hover:text-[var(--danger-text)] disabled:cursor-not-allowed disabled:opacity-60"
                            aria-label={`Delete ${link.title}`}
                            title="Delete link"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--panel-strong)]">
                        <div className="h-2 rounded-full bg-[var(--accent)]" style={{ width }} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-[var(--muted)]">No links created yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Analytics;
