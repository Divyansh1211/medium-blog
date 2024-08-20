import { Link, useLocation } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const location = useLocation();
  return (
    <div className="border-b flex justify-between px-10 text-2xl py-4 font-bold">
      <Link to="/blogs">
        <div>Medium</div>
      </Link>
      <div className="flex justify-center">
        {location.pathname === "/publish" ? null : (
          <Link to="/publish">
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              New
            </button>
          </Link>
        )}
        <Avatar size={"big"} authorName="AloSingh" />
      </div>
    </div>
  );
};
