import { MyContext } from "@/context/BlogContext";
import React from "react";
import { useNavigate, useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const { getPublished } = MyContext();
  const clickedBlog = getPublished.find((post) => post.id === id);

  const navigate = useNavigate();
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Back Button */}
      <div
        onClick={() => navigate("/")}
        className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Articles
      </div>

      <article>
        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {clickedBlog?.tags.map((elem, idx) => {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-gray-200 border text-secondary-foreground"
                >
                  {elem}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {clickedBlog.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {/* Author */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>{clickedBlog.authorName}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span>{clickedBlog.date}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>1 min read</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          <p>{clickedBlog.content}</p>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;
