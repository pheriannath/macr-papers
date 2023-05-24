import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Keywords from "./components/Keywords";
import Bios from "./components/Bios";
import Article from "./components/Article";
import Publication from "./components/Publication";
import Bio from "./components/Bio";
import Error from "./components/Error";
import Background from "./assets/background.jpeg";
import "./styles/index.css";
import Home from "./components/Home";
import Keyword from "./components/Keyword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/keywords",
        element: <Keywords />,
      },
      {
        path: "/keywords/:keyId",
        element: <Keyword />,
      },
      {
        path: "/bios",
        element: <Bios />,
      },
      {
        path: "/:pubId",
        element: <Publication />,
        children: [
          {
            path: "/:pubId/:articleId",
            element: <Article />,
          },
        ],
      },
      { path: "/bio", element: <Bio /> },
    ],
  },
]);

const rootEl = document.getElementById("root");
const body = document.body;
body.style.backgroundImage = `url(${Background})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundAttachment = "fixed";

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
