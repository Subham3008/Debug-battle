import { MyContext } from "@/context/BlogContext";
import React from "react";

const Home = () => {
  const{blogPost, setBlogPost}=MyContext()
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
          <span className="text-sm text-muted-foreground">5 articles</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {}
        </div>
      </section>
    </main>
  );
};

export default Home;
