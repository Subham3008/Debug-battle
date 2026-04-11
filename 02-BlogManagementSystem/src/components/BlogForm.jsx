import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyContext } from "@/context/BlogContext";
import { nanoid } from "nanoid";
import { useState } from "react";

const BlogForm = () => {
  const { blogPost, setBlogPost, loggedUser } = MyContext();
  const [isPublish, setIsPublish] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    shouldFocusError: true, // 🔥 auto focus first error
  });

  const onSubmit = (data) => {
    const newPost = [
      ...blogPost,
      {
        ...data,
        authorName: loggedUser?.name,
        id: nanoid(),
        published: isPublish,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      },
    ];
    console.log(newPost);

    setBlogPost(newPost);
    localStorage.setItem("blog_post", JSON.stringify(newPost));
    reset();
    navigate("/dashboard");
  };

  return (
    <div>
      {/* Back Button */}
      <div className="mb-6">
        <div
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground cursor-pointer"
        >
          ← Back to Dashboard
        </div>
      </div>

      {/* Card */}
      <div className="rounded-xl border border-black/20 bg-card shadow-md">
        {/* Header */}
        <div className="px-6 pt-6">
          <h2 className="text-xl font-semibold">Create New Article</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 space-y-6">
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              placeholder="Enter a compelling title..."
              className="mt-1 w-full rounded-md border px-3 py-2 text-lg outline-none focus:ring-2 focus:ring-blue-700 border-black/20"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-sm font-medium">Excerpt</label>
            <textarea
              {...register("excerpt", {
                required: "Excerpt is required",
              })}
              rows="2"
              placeholder="Write a brief summary..."
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-700 border-black/20"
            />
            <p className="text-xs text-muted-foreground">
              A short description that appears on the blog listing
            </p>
            {errors.excerpt && (
              <p className="text-red-500 text-xs mt-1">
                {errors.excerpt.message}
              </p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="text-sm font-medium">Content</label>
            <textarea
              {...register("content", {
                required: "Content is required",
                minLength: {
                  value: 20,
                  message: "Content must be at least 20 characters",
                },
              })}
              rows="3"
              placeholder="Write your article content here... (Markdown supported)"
              className="mt-1 w-full rounded-md border px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-blue-700 border-black/20"
            />
            <p className="text-xs text-muted-foreground">
              Supports Markdown: ## for headers, **bold**, *italic*, `code`,
              etc.
            </p>
            {errors.content && (
              <p className="text-red-500 text-xs mt-1">
                {errors.content.message}
              </p>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm font-medium">Tags</label>
            <input
              {...register("tags", {
                required: "Tags are required",
              })}
              type="text"
              placeholder="Add tags..."
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-700 border-black/20"
            />
            <p className="text-xs text-muted-foreground">
              Add up to 5 tags to help readers find your article
            </p>
            {errors.tags && (
              <p className="text-red-500 text-xs mt-1">{errors.tags.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="submit"
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
              Save as Draft
            </button>

            <button
              onClick={() => setIsPublish(true)}
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
