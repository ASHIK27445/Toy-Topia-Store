import { NavLink } from "react-router";
import logo from '../../assets/logo.png'
const Navbar = () => {
    const links = <>
         <li><NavLink to="/" className={({isActive}) => isActive ? "font-bold pr-5 underline" : "text-black pr-5"}>Home</NavLink></li>
        <li><NavLink to='/login'  className={({isActive}) => isActive ? "font-bold pr-5" : "text-black pr-5"}>Login</NavLink></li>
        <li><NavLink to="/register" className={({isActive}) => isActive ? "font-bold pr-5 underline" : "text-black pr-5"}>Registration</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 py-5">
    
        <div className="navbar-start pl-10">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {" "}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
                </svg>
            </div>
            <ul
                tabIndex="-1"
                className="font-comfortaa menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
            </div>
            <div className="w-50">
                <img src={logo} />
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className=" font-comfortaa font-bold textarea-md menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="dropdown dropdown-end navbar-end relative pr-10">
            <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            >
            <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
            </div>
            </div>
            <ul
            tabIndex="-1"
            className="absolute top-12 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <li>
                <a className="justify-between">
                Profile
                <span className="badge">New</span>
                </a>
            </li>
            <li>
                <a>Settings</a>
            </li>
            <li>
                <a>Logout</a>
            </li>
            </ul>
        </div>

    </div>
  );
};
export default Navbar;
