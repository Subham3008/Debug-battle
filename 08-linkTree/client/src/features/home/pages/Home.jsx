import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
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
    <main className="min-h-screen bg-[var(--surface)] px-4 py-6 text-[var(--text)]">
      <div className="mx-auto flex max-w-5xl justify-end">
        <ThemeToggle />
      </div>

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col justify-center">
        <div className="mb-8 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-3xl font-semibold text-[var(--accent)] shadow-[var(--shadow)]">
            {username?.charAt(0)?.toUpperCase()}
          </div>
          <h1 className="mt-5 text-3xl font-semibold text-[var(--text)]">@{username}</h1>
        </div>

        {isLoading ? (
          <p className="text-center text-[var(--muted)]">Loading links...</p>
        ) : null}

        {error ? (
          <p className="rounded-md border border-[var(--danger-border)] bg-[var(--danger-bg)] px-4 py-3 text-center text-sm text-[var(--danger-text)]">
            {error}
          </p>
        ) : null}

        {!isLoading && !error ? (
          <div className="space-y-3">
            {links.length ? (
              links.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleLinkClick(link._id)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-5 py-4 text-center font-medium text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--panel-strong)]"
                >
                  <span>{link.title}</span>
                  <ExternalLink size={16} className="text-[var(--muted)]" />
                </a>
              ))
            ) : (
              <p className="text-center text-[var(--muted)]">No links available.</p>
            )}
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Home;
