import { Link } from "react-router-dom";
import { useState } from "react";
import { SignUpInputType } from "@divyanshtechno/medium-common";

export const Auth = () => {
  const [postInputs, setPostInputs] = useState<SignUpInputType>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="justify-center">
        <div className="text-4xl font-extrabold text-center">
          Create an account
        </div>
        <div className="text-slate-500 text-xl font-semibold text-center">
          Already have an account?{" "}
          <Link className="underline" to="/signin">
            Login
          </Link>
        </div>
        <LabelInput
          type="text"
          label="Username"
          placeholder="John Doe"
          onchanged={(e) => {
            setPostInputs({ ...postInputs, name: e.target.value });
          }}
        />
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
    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>
      <input
        onChange={onchanged}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
