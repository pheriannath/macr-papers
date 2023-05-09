import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Article from "./components/Article";
import Publication from "./components/Publication";
import Bio from "./components/Bio";
import Error from "./components/Error";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/publication/:pubId",
        element: <Publication />,
        children: [
          {
            path: "/publication/:pubId/:articleId",
            element: <Article />,
          },
        ],
      },
      { path: "/bio", element: <Bio /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
