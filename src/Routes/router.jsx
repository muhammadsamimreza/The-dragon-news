import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomeLayout from "../pages/HomeLayout/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            }
        ]
    }
])

export default router