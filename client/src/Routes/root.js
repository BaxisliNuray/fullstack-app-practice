import Home from "../pages/Home";
import Mainroot from "../pages/Mainroot";
import Notfound from "../pages/Notfound";

export const ROUTES = [
    {
        path: '/',
        element: <Mainroot />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "*",
                element: <Notfound />
            }
        ]
    }
]