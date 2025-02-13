import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Skeleton } from "../components/skeleton";
import { useBlogs } from "../hooks/Index";
import { Heart, MessageSquare, PenSquare, Share2 } from "lucide-react";

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
      <div className="flex justify-center w-full">
        <div>
          <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Medium
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <Link to="/publish">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center mx-auto hover:bg-blue-700 transition-colors">
                  <PenSquare className="h-5 w-5 mr-2" />
                  Start Writing
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {blogs.map((blog) => {
                return (
                  <Link to={`/blogs/${blog.id}`}>
                    <article
                      key={blog.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <img
                        src="https://play-media.org/wp-content/uploads/2023/09/blog-concept-cloud-chart-print-d.jpg"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>20th August 2024</span>
                          <span className="mx-2">•</span>
                          {Math.ceil(blog.content.length / 100)} minute(s) read
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          {blog.title}
                        </h2>
                        <div>{blog.content.slice(0, 50)}...</div>
                        {/* <p className="text-gray-600 mb-4">{post.excerpt}</p> */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <div className="h-8 w-8 rounded-full font-bold text-2xl ">
                            {blog.author.name[0].toUpperCase()}
                          </div> */}
                            <span className=" text-sm font-medium text-gray-900">
                              {blog.author.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-500">
                            <button className="flex items-center hover:text-red-500">
                              <Heart className="h-5 w-5 mr-1" />
                              <span>0</span>
                            </button>
                            <button className="flex items-center hover:text-blue-500">
                              <MessageSquare className="h-5 w-5 mr-1" />
                              <span>0</span>
                            </button>
                            <button className="hover:text-blue-500">
                              <Share2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
