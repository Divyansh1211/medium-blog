import { useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent";
import { useBlog } from "../hooks/Index";

export const BlogWithId = () => {
  const id : string | undefined = useParams().id;
  const { blog, loading } = useBlog(id);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <BlogContent blog={blog}/>;
};
