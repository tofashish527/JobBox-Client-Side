import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:'/',
            Component:Home,
            index:true,
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