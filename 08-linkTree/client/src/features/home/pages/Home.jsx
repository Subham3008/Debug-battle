import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col justify-center">
        <div className="mb-8 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-3xl font-semibold text-cyan-200">
            {username?.charAt(0)?.toUpperCase()}
          </div>
          <h1 className="mt-5 text-3xl font-semibold text-white">@{username}</h1>
        </div>

        {isLoading ? (
          <p className="text-center text-slate-400">Loading links...</p>
        ) : null}

        {error ? (
          <p className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-100">
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
                  className="block rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-center font-medium text-white transition hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-100"
                >
                  {link.title}
                </a>
              ))
            ) : (
              <p className="text-center text-slate-400">No links available.</p>
            )}
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Home;
