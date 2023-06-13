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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/DashBoard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/DashBoard/Instructor/MyClasses/MyClasses";
import SelectedClasses from "../pages/DashBoard/Student/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/DashBoard/Student/EnrolledClasses/EnrolledClasses";
import InstructorRoute from "./InstructorRoute";


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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            //admin routes
            {
                path: 'manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            //Instructor Routes
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: "my-classes",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            //student Routes
            {
                path: "selected-classes",
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: "enrolled-classes",
                element: <EnrolledClasses></EnrolledClasses>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]);