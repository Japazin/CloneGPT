import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLoayout from "./routes/layouts/rootLayout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLoayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
