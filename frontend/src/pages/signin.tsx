import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quotes";

export const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Auth type="signin" />
      <Quotes />
    </div>
  );
};
