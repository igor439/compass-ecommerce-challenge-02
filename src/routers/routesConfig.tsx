import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";


const configRouter = [
    {
    path: '/',
    element: <App/>,
    children:[{
        path:'/',
        element: <Home/>,
    },

    {
        path:'Shop',
        element: <Shop/>,
    },

    {
        path:'Product',
        element: <SingleProduct/>,
    },
    


    ]
 }]
 const router = createBrowserRouter(configRouter);
 export default router;
 