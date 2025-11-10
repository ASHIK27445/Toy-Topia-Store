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

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true, Component: Home, 
                loader: () => fetch('/toy.json')
            },
            {
                path:'/alltoys',
                Component: AllToys,
                loader: () => fetch('/toy.json')
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
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])