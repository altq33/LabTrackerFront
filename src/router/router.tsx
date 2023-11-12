import { Wrapper } from "components/Wrapper";
import { Welcome } from "pages/Welcome/Welcome";
import { WorkSpaceLayout } from "pages/WorkSpaceLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Welcome />,
        index: true,
      },
      {
        path: "workspace",
        element: <WorkSpaceLayout />,
        children: [
          {
            path: "overview",
            element: null,
          },
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
    ],
  },
]);
