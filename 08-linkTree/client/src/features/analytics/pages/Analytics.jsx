import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuthUser, clearAuthUser } from "../../auth/utils/authStorage";
import { createLink, getAnalytics } from "../services/analytics.api";

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

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
        <div className="mx-auto max-w-6xl">Loading analytics...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
        <div className="mx-auto max-w-3xl rounded-lg border border-red-400/30 bg-red-500/10 p-6 text-red-100">
          {error}
        </div>
      </main>
    );
  }

  const { summary, lastSevenDays, links } = analytics;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider text-cyan-300">Analytics Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              @{authUser.username}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${authUser.username}`}
              className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-cyan-300 hover:text-cyan-200"
            >
              View public page
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-100"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-slate-400">Total Links</p>
            <strong className="mt-3 block text-3xl text-white">{summary.totalLinks}</strong>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-slate-400">Total Clicks</p>
            <strong className="mt-3 block text-3xl text-white">{summary.totalClicks}</strong>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-slate-400">Avg. Clicks</p>
            <strong className="mt-3 block text-3xl text-white">{summary.averageClicks}</strong>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-slate-400">Top Link</p>
            <strong className="mt-3 block truncate text-lg text-white">
              {summary.topLink?.title || "No clicks yet"}
            </strong>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">Add New Link</h2>
          </div>

          <form onSubmit={handleCreateLink} className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-end">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Title</span>
              <input
                type="text"
                name="title"
                value={linkForm.title}
                onChange={handleLinkFormChange}
                className="mt-2 w-full rounded-md border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                placeholder="Portfolio"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">URL</span>
              <input
                type="url"
                name="url"
                value={linkForm.url}
                onChange={handleLinkFormChange}
                className="mt-2 w-full rounded-md border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                placeholder="https://example.com"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isCreatingLink}
              className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isCreatingLink ? "Adding..." : "Add Link"}
            </button>
          </form>

          {formError ? (
            <p className="mt-4 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {formError}
            </p>
          ) : null}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Last 7 Days Activity</h2>
              <span className="text-sm text-slate-400">Clicks per day</span>
            </div>

            <div className="flex h-72 items-end gap-3">
              {lastSevenDays.map((day) => {
                const height = `${Math.max((day.clicks / maxDailyClicks) * 100, day.clicks ? 8 : 2)}%`;

                return (
                  <div key={day.date} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <div className="flex h-full w-full items-end rounded-md bg-slate-900/70 p-1">
                      <div
                        className="w-full rounded bg-cyan-400"
                        style={{ height }}
                        title={`${day.clicks} clicks`}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-white">{day.clicks}</p>
                      <p className="text-xs text-slate-400">{day.date.slice(5)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">Link Performance</h2>
            <div className="mt-5 space-y-4">
              {links.length ? (
                links.map((link) => {
                  const width = `${Math.max((link.clicks / Math.max(summary.topLink?.clicks || 1, 1)) * 100, link.clicks ? 8 : 2)}%`;

                  return (
                    <div key={link.id}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <a href={link.url} target="_blank" rel="noreferrer" className="truncate text-sm font-medium text-white">
                          {link.title}
                        </a>
                        <span className="text-sm text-slate-400">{link.clicks} clicks</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 rounded-full bg-emerald-400" style={{ width }} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-slate-400">No links created yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Analytics;
