import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignInPage from "./routes/signInPage/signInPage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import SignUpPage from "./routes/signUpPage/signUpPage";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout"
import RootLoayout from "./layouts/rootLayout/RootLayout";
import ChatPage from "./routes/chatPage/ChatPage";



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
        path: "/sign-up*",
        element: <SignUpPage/>,
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
