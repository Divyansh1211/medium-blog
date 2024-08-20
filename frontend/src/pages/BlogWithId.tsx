import { useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent";
import { useBlog } from "../hooks/Index";
import { Skeleton } from "../components/skeleton";

export const BlogWithId = () => {
  const id: string | undefined = useParams().id;
  const { blog, loading } = useBlog(id);
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
  return <BlogContent blog={blog} />;
};
