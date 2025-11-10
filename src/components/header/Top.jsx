import { NavLink } from "react-router";
import top from "../../assets/top.png";
import { FaTruckMoving } from "react-icons/fa6";
import { use } from "react";
import { AuthContext } from '../../context/AuthContext'
import { toast } from "react-toastify";
const Top = () => {
  const {user, logoutUser} = use(AuthContext)
  const handleLogout = () => {
      logoutUser()
        .then(()=> toast.success("logout Successful",{
          autoClose:1000
        }))
        .catch((error)=> toast.error(error.massage))
    }
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
          { user ? <span className="ml-4 cursor-pointer hover:underline hover:font-semibold" onClick={handleLogout}>Logout</span>:
                    <NavLink to='/login' className="ml-4 hover:underline hover:font-semibold">Login</NavLink>
          }
        </div>
      </div>
    </div>
  );
};
export default Top;
