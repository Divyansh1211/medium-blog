import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { Blog } from "./pages/blog";
import { BlogWithId } from "./pages/BlogWithId";
import { Publish } from "./pages/Publish";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      setIsAuthenticated(true);
      navigate("/blogs");
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={isAuthenticated ? <Blog /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Blog /> : <SignIn />}
        />
        <Route
          path="/blogs/:id"
          element={isAuthenticated ? <BlogWithId /> : <SignUp />}
        />
        <Route
          path="/blogs"
          element={isAuthenticated ? <Blog /> : <SignUp />}
        />
        <Route path="/" element={isAuthenticated ? <Blog /> : <SignUp />} />
        <Route
          path="/publish"
          element={isAuthenticated ? <Publish /> : <SignUp />}
        />
      </Routes>
    </>
  );
}

export default App;
