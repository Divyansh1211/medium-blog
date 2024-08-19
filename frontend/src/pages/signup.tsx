import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quotes";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
      <Auth />
      <div className="invisible lg:visible">
        <Quotes />
      </div>
    </div>
  );
};
