import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quotes";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Auth type="Signup" />
      <Quotes />
    </div>
  );
};
