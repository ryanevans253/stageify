import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HeroBanner from "./components/hero/HeroBanner.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Upload from "./components/upload/Upload.jsx";
import TestApi from "./components/testapi/TestApi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroBanner />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/test",
    element: <TestApi />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
