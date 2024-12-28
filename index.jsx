import {createRoot} from "react-dom/client"
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Hooks from "./Render"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import CountryDetails from "./Components/CountryDetails"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Hooks />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home /> ,
            },
            {
                path: '/Contact',
                element: <Contact /> ,
            },
            {
                path: '/:country',
                element: <CountryDetails /> ,
            },
        ],
    },
    
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)