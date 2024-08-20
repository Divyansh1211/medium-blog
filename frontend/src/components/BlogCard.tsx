import { Link } from "react-router-dom";

export interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="font-bold pt-4 max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar size={"small"} authorName={authorName} />
          </div>
          <div className="font-extralight pl-2 ">{authorName}</div>
          <div className="pl-2">&#9679;</div>
          <div className="font-bold pl-2 text-slate-400">{publishedDate}</div>
        </div>
        <div className="text-2xl ">{title}</div>
        <div className="font-thin text-md">{content.slice(0, 100)}...</div>
        <div className="text-slate-500 font-thin mt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
        <div className="bg-slate-200 w-full h-1 mt-4 "></div>
      </div>
    </Link>
  );
};

export const Avatar = ({
  authorName,
  size,
}: {
  authorName: string;
  size: "big" | "small";
}) => {
  return (
    <div
      className={`relative items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-9 h-9"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex flex-col `}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 ${
          size === "small" ? "text-xs" : "text-md"
        } flex flex-col justify-center`}
      >
        {authorName[0].toUpperCase()}
      </span>
    </div>
  );
};
