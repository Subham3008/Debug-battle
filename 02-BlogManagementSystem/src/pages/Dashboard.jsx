import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your articles, Subham
          </p>
        </div>

        <div
          onClick={() => navigate("/dashboard/create")}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          New Article
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-black/20 p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Total Articles</p>
          <h2 className="text-3xl font-semibold">1</h2>
        </div>

        <div className="rounded-xl p-6 border border-black/20 p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Published</p>
          <h2 className="text-3xl font-semibold text-green-600">1</h2>
        </div>

        <div className="rounded-xl border p-6 shadow-sm border-black/20 p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Drafts</p>
          <h2 className="text-3xl font-semibold text-muted-foreground">0</h2>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Articles</h2>

        <div className="space-y-3">
          {/* Article Card */}
          <div className="flex items-center justify-between rounded-xl border p-4 transition hover:shadow-md border-black/20 p-6 shadow-sm">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-medium">Nothing</h3>

                <span className="rounded-md bg-primary px-2 py-0.5 text-xs text-white">
                  Published
                </span>
              </div>

              <p className="mt-1 truncate text-sm text-muted-foreground">
                Nothing is a phone where lots of stuff
              </p>

              <p className="mt-2 text-xs text-muted-foreground">
                Last updated: Apr 10, 2026
              </p>
            </div>

            {/* Action Button */}
            <button className="ml-4 rounded-md p-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
