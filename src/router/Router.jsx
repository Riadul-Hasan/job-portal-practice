import {
  createBrowserRouter
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../provider/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../addJob/AddJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/register",
          Component: Register
        },
        {
          path: "/signIn",
          Component: SignIn
        },
        {
          path: "/jobs/:id",
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
          Component: JobDetails
        },
        {
          path: "/jobApply/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "/myApplications",
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        }
    ]
  },
]);