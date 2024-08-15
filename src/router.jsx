import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import Contact from "./views/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/project',
                element: <Project />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])
export default router