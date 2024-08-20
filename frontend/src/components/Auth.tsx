import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpInputType } from "@divyanshtechno/medium-common";
import axios from "axios";

export const Auth = ({ type }: { type: "Signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignUpInputType>({
    name: "",
    email: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      if (type === "Signup" && postInputs.name === "") {
        alert("Name is required");
        return;
      }
      if (postInputs.email === "") {
        alert("Email is required");
        return;
      }
      if (postInputs.password === "") {
        alert("Password is required");
        return;
      }
      const response = await axios.post(
        `https://backend.divyanshmanchanda1211.workers.dev/api/v1/user${
          type === "Signup" ? "/signup" : "/signin"
        }`,
        postInputs
      );
      const jwt = response.data;
      console.log(jwt);
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div>
          <div className="pr-10 pl-10">
            <div className="text-4xl font-extrabold text-center">
              Create an account
            </div>
            <div className="text-slate-500 text-xl font-semibold text-center">
              {type == "Signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className=" pl-2 underline"
                to={type == "Signup" ? "/signin" : "/signup"}
              >
                {type == "Signup" ? "Login" : "Sign up"}
              </Link>
            </div>
          </div>
          {type == "Signup" ? (
            <LabelInput
              type="text"
              label="Username"
              placeholder="John Doe"
              onchanged={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
            />
          ) : null}
          <LabelInput
            type="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            onchanged={(e) => {
              setPostInputs({ ...postInputs, email: e.target.value });
            }}
          />
          <LabelInput
            type="password"
            label="Password"
            placeholder="Shhhh...."
            onchanged={(e) => {
              setPostInputs({ ...postInputs, password: e.target.value });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="mt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type == "Signup" ? "Sign up" : " Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelInputProps {
  label: string;
  placeholder: string;
  onchanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string | "text";
}

const LabelInput = ({
  label,
  placeholder,
  onchanged,
  type,
}: LabelInputProps) => {
  return (
    <div className="pt-2 pb-2">
      <label className="block mb-2 text-sm font-bold text-black">{label}</label>
      <input
        onChange={onchanged}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
