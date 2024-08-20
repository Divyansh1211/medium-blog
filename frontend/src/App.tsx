import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { Blog } from "./pages/blog";
import { BlogWithId } from "./pages/BlogWithId";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              localStorage.getItem("jwt") === null ? <SignUp /> : <Blog />
            }
          />
          <Route
            path="/signin"
            element={
              localStorage.getItem("jwt") === null ? <SignIn /> : <Blog />
            }
          />
          <Route path="/blogs/:id" element={<BlogWithId />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
