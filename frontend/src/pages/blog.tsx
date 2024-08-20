import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/skeleton";
import { useBlogs } from "../hooks/Index";

export const Blog = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <center>
        <div className="w-full">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </center>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => {
            return (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="20th August 2024"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
