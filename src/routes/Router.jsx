import { createBrowserRouter } from "react-router";
import HomeLayout from "../pages/home/HomeLayout";
import Home from "../pages/home/Home";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../pages/private/PrivateRoute";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboardh from "../components/Dashboard/Dashboard";
import ForgetPassword from "../pages/other/ForgetPassword"
import TermandCondition from "../components/Others/TermandCondition";
import Policy from "../components/Others/Policy";
import NotFoundPage from "../pages/error/NotFoundPage";
import { RotatingSquare } from "react-loader-spinner";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true, Component: Home, 
                loader: () => fetch('/toy.json'),
                hydrateFallbackElement: <div className="my-40 flex justify-center items-center">
                    <RotatingSquare
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="rotating-triangles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""/> 
                </div>
            },
            {
                path:'/alltoys',
                Component: AllToys,
                loader: () => fetch('/toy.json'),
                hydrateFallbackElement: <div className="my-40 flex justify-center items-center">
                    <RotatingSquare
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="rotating-triangles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""/> 
                </div>
            },
            {
                path: 'toyDetails/:toyID',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboardh></Dashboardh></PrivateRoute>
            },
            {
                path: '/forgetPassword',
                Component: ForgetPassword
            },
            {
                path: '/terms',
                Component: TermandCondition
            },
            {
                path: '/policy',
                Component: Policy
            },
            // {
            //     path: '*',
            //     Component: NotFoundPage
            // }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])