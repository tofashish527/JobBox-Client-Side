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
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";
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
          path:'/myapplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
        },
        {
          path:'/addjob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path:'/mypostedjobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        },
         {
          path:'/applications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
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