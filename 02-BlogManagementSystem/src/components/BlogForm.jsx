import React from "react";
import { useNavigate } from "react-router";

const BlogForm = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Back Button */}
      <div className="mb-6">
        <div
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Dashboard
        </div>
      </div>

      {/* Card */}
      <div className="rounded-xl border bg-card shadow-sm">
        {/* Header */}
        <div className="px-6 pt-6">
          <h2 className="text-xl font-semibold">Create New Article</h2>
        </div>

        {/* Form */}
        <form className="px-6 py-6 space-y-6">
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              placeholder="Enter a compelling title..."
              className="mt-1 w-full rounded-md border px-3 py-2 text-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-sm font-medium">Excerpt</label>
            <textarea
              rows="2"
              placeholder="Write a brief summary of your article..."
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              A short description that appears on the blog listing
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="text-sm font-medium">Content</label>
            <textarea
              rows="16"
              placeholder="Write your article content here... (Markdown supported)"
              className="mt-1 w-full rounded-md border px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Supports Markdown: ## headers, **bold**, *italic*, `code`
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm font-medium">Tags</label>
            <input
              type="text"
              placeholder="Add tags (press Enter to add)"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Add up to 5 tags to help readers find your article
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                <path d="M7 3v4a1 1 0 0 0 1 1h7" />
              </svg>
              Save as Draft
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
