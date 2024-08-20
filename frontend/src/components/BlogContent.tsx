import { BlogType } from "../hooks/Index";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const BlogContent = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 pt-10 w-full px-10 max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold pb-2">{blog.title}</div>
            <div className="text-xl font-medium pb-2">{blog.content}</div>
            <div className="text-slate-400">Posted on 20th August 2023</div>
          </div>
          <div className="pl-8 col-span-4">
            <div className="text-slate-600 text-lg font-semibold">Author</div>
            <div className="flex">
              <div className="pt-1 flex flex-col justify-center ">
                <Avatar
                  size="big"
                  authorName={blog.author.name || "Anonymous"}
                />
              </div>
              <div className="pl-2">
                <div className="text-2xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
