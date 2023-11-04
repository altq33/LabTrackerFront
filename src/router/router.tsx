import { Layout } from "pages/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "subjects",
        element: null,
      },
      {
        path: "teachers",
        element: null,
      },
      {
        path: "tasks",
        element: null,
      },
    ],
  },
]);
