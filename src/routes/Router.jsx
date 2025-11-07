import { createBrowserRouter } from "react-router";
import HomeLayout from "../pages/home/HomeLayout";
import Home from "../pages/home/Home";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../pages/private/PrivateRoute";


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
            }
        ]
    },

])