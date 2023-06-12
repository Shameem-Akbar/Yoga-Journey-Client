import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import PageNotFound from "../Layout/PageNotFound/PageNotFound";
import Contact from "../pages/Contact/Contact";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard/DashBoard";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers/ManageUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'manage-classes',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]);