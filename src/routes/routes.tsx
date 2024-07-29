import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/Pages/About";
import AddService from "@/Pages/admin/AddService";
import Dashboard from "@/Pages/admin/Dashboard";
import Services from "@/Pages/admin/Services";
import Home from "@/Pages/home";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/admin/dashboard'} />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: "add-service",
                element: <AddService />
            },
            {
                path: 'services-list',
                element: <Services />
            }
        ]
    },

])

export default router;