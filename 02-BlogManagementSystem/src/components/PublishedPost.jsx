import React from "react";
import { useNavigate } from "react-router";

const PublishedPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${post.id}`)}>
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            {post?.tags.map((elem, idx) => {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-gray-200 text-secondary-foreground"
                >
                  {elem}
                </span>
              );
            })}
          </div>

          <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-4">
          <p className="line-clamp-3 text-muted-foreground">{post.content}</p>
        </div>

        {/* Footer */}
        <div className="px-6 flex items-center justify-between text-sm text-muted-foreground">
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
            <span>{post.authorName.split(" ")[0]}</span>
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
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedPost;
