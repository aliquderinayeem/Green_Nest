import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from "@/Pages/LandingPage";
import Plants from "@/Pages/Plants";
import LoginForm from "@/Pages/LoginForm/LoginForm";
import RegisterForm from "@/Pages/RegisterForm/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [


    ]
  },
  {
    path: 'plants',
    Component: Plants
  },
  {
    path: 'login',
    Component: LoginForm
  },
  {
    path: 'register',
    Component: RegisterForm
  }
]);
export default router;