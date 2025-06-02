import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Error from "../Shared/Error";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error></Error>, 
    children:[
        {
            path:'/',
            Component:Home,
            index:true,
        },
        {
            path:'/jobs/:id',
            Component:JobDetails,
            loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:'/jobapply/:id',
            element:<PrivateRoute><JobApply></JobApply></PrivateRoute>,
        },
        {
            path:'/register',
            Component:Register,
        },
         {
            path:'/login',
            Component:Login,
        },
    ]
  },
]);
export default router;