import React from "react";
import { useNavigate } from "react-router";

const PublishedPost = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-3">
          <div className="flex flex-wrap gap-2"></div>

          <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
            jasdhsid
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-4">
          <p className="line-clamp-3 text-muted-foreground">jksnkdf</p>
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
            <span>Subham</span>
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
            <span>April 11, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedPost;
