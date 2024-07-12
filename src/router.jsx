import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import App from "./App";
import Login from "./authen/Login";
import Register from "./authen/Register";
import Profile from "./authen/Profile";
import ListingPage from "./routes/PropertyPage";
import Property from "./section/Property";
import Detail from "./section/Detail";
import ContactPage from "./routes/ContactPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/profile',
                element:<Profile/>
            }, 
            {
                path:'/listings',
                element:<ListingPage/>
            },
            {path:'/listings/:slug', 
                element:<Detail/>
            },
            {
                path:'/contact',
                element:<ContactPage/>
            }
        ]
    }
])