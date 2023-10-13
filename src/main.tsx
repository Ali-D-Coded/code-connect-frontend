import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Auth from "./pages/auth/Auth";
import { GolobalProvider } from "./context/GlobalContext";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/users",
        element: <h1>Users</h1>,
      },
      {
        path: "/certificates",
        element: <h1>Certificates</h1>,
      },
      {
        path: "/events",
        element: <h1>Events</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GolobalProvider>
      <RouterProvider router={router} />
    </GolobalProvider>
  </React.StrictMode>
);
