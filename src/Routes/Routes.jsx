import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NavBar from "../Components/NavBar/NavBar";
import LandingPage from "@/Pages/LandingPage";
import Plants from "@/Pages/Plants";
import LoginForm from "@/Components/LoginForm/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    Component:LandingPage,
    children:[
      {
        path:'login',
        Component:LoginForm
      },
      {
        path:'register',
        Component:Register
      }
    ]
  },
  {
    path:'/plants',
    Component:Plants
  },
]);
export default router;