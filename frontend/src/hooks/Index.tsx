import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://backend.divyanshmanchanda1211.workers.dev/api/v1";
const TEST_URL = "http://localhost:8787/api/v1";

export const useBlogs = () => {
  type BlogType = {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
    };
  };
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${TEST_URL}/blog/bulk`,

        {
          headers: {
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      );
      setBlogs(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading };
};

export type BlogType = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

export const useBlog = (id: string | undefined) => {
  const [blog, setBlog] = useState<BlogType>({
    id: "",
    title: "",
    content: "",
    author: {
      name: "",
    },
  });
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${TEST_URL}/blog/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("jwt")}`,
        },
      });
      console.log(response.data);
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  return { blog, loading };
};
