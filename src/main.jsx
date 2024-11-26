import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLoayout from "./routes/layouts/rootLayout/RootLayout";
import DashboardLayout from "./routes/layouts/dashboardLayout/dashboardLayout";
import ChatPage from "./routes/chatPage/ChatPage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import SignInPage from "./routes/signInPage/signInPage";
import SignUpPage from "./routes/signUpPage/signUpPage";

const router = createBrowserRouter([
  {
    element: <RootLoayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in*",
        element: <SignInPage />,
      },
      {
        path: "/sign-ip*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
