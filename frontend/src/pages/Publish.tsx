import axios from "axios";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    console.log(title, content);
    try {
      const response = await axios.post(
        `https://backend.divyanshmanchanda1211.workers.dev/api/v1/blog/`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      );
      console.log(response);
      navigate(`/blogs/${response.data.message}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="pb-5">
        <Appbar />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg  ">
              <div className="bg-white rounded-b-lg ">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  id="editor"
                  className="p-2 text-xl font-bold block w-full text-gray-800 bg-white border-0"
                  placeholder="Title..."
                  required
                ></input>
              </div>
            </div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
              <div className="bg-white rounded-b-lg ">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  id="title"
                  rows={5}
                  className="p-2 block w-full text-sm text-gray-800 bg-white border-0"
                  placeholder="Write an article..."
                  required
                ></textarea>
              </div>
            </div>
            <button
              onClick={createPost}
              type="button"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
            >
              Publish post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
