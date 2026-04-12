import PublishedPost from "@/components/PublishedPost";
import { MyContext } from "@/context/BlogContext";
import { NotebookPen } from "lucide-react";
import React from "react";

const Home = () => {
  const { getPublished } = MyContext();
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to <span className="text-blue-700">Inkwell</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          Discover thoughtful articles on technology, programming, and software
          engineering from passionate writers.
        </p>
      </section>
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Latest Articles
          </h2>
          <span className="text-sm text-muted-foreground">
            {getPublished.length} articles
          </span>
        </div>
        {getPublished.length < 1 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-black/20 rounded-sm bg-white">
            {/* Icon */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <NotebookPen />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold tracking-tight">
              No articles yet
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Author haven’t written any articles yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getPublished.map((post) => {
              return <PublishedPost key={post.id} post={post} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
