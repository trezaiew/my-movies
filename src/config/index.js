import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const AppRoutes = () => {
    const router = createBrowserRouter([{
        path: "/:numberPage",
        element: <Home />
    },
    {
        path: "/movie/:id",
        element: <Movie />
    },

    {
        path: "*",
        element: <Navigate to="/1" />
    }
    ]);

    return (
        <RouterProvider router={router} />
    )
};



export default AppRoutes;