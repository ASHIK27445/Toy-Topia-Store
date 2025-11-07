import { NavLink } from "react-router";
import top from "../../assets/top.png";
import { FaTruckMoving } from "react-icons/fa6";
const Top = () => {
  return (
    <div
      className="h-[50px] w-full flex items-center border-x"
      style={{
        backgroundImage: `url(${top})`,
        backgroundRepeat: "repeat-x",
        backgroundBlendMode: "screen",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 mx-auto text-sm text-white font-comfortaa flex justify-between">
        <h2 className="flex gap-1 items-center">
          {" "}
          <FaTruckMoving></FaTruckMoving>Free free shipping with over $150
        </h2>
        <div>
            <NavLink className="ml-4">Login</NavLink>
            <NavLink className="ml-4">Register</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Top;
