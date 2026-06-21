import React, { useEffect, useState } from "react";
import { ExternalLink, Link as LinkIcon, Sparkles } from "lucide-react";
import { useParams } from "react-router";
import ThemeToggle from "../../../shared/theme/ThemeToggle";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const { username } = useParams();
  const { fetchLinks, trackLinkClick } = useHome();
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetchLinks({ username })
      .then((fetchedLinks) => {
        setLinks(fetchedLinks.links);
        setError("");
      })
      .catch((apiError) => {
        setError(apiError.response?.data?.message || "Unable to load links");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username, fetchLinks]);

  const handleLinkClick = (linkId) => {
    trackLinkClick({ linkId });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--surface)] px-4 py-6 text-[var(--text)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,var(--accent-soft),transparent)] opacity-70" />

      <div className="relative mx-auto flex max-w-5xl justify-end">
        <ThemeToggle />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col justify-center py-10">
        <div className="mb-8 rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 text-center shadow-[var(--shadow)]">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel-strong)] text-4xl font-semibold text-[var(--accent)]">
            {username?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <h1 className="mt-5 text-4xl font-semibold text-[var(--text)]">@{username}</h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
            <Sparkles size={15} />
            Curated links in one place
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-16 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--panel)]"
              />
            ))}
          </div>
        ) : null}

        {error ? (
          <p className="rounded-2xl border border-[var(--danger-border)] bg-[var(--danger-bg)] px-5 py-4 text-center text-sm text-[var(--danger-text)]">
            {error}
          </p>
        ) : null}

        {!isLoading && !error ? (
          <div className="space-y-4">
            {links.length ? (
              <div className="mb-2 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                <LinkIcon size={16} />
                <span>{links.length} active {links.length === 1 ? "link" : "links"}</span>
              </div>
            ) : null}

            {links.length ? (
              links.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleLinkClick(link._id)}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-5 py-4 font-medium text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--panel-strong)] hover:shadow-[var(--shadow)]"
                >
                  <span className="min-w-0 truncate text-left">{link.title}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white">
                    <ExternalLink size={16} />
                  </span>
                </a>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--panel)] px-5 py-8 text-center text-[var(--muted)]">
                No links available.
              </div>
            )}
          </div>
        ) : null}

        <p className="mt-8 text-center text-xs font-medium text-[var(--muted)]">
          LinkTree profile
        </p>
      </section>
    </main>
  );
};

export default Home;
