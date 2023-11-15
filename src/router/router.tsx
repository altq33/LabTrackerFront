import { Wrapper } from "components/Wrapper";
import { Profile } from "pages/Profile/Profile";
import { Teachers } from "pages/Teachers/Teachers";
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
            index: true,
          },
          {
            path: "subjects",
            element: null,
          },
          {
            path: "teachers",
            element: <Teachers />,
          },
          {
            path: "tasks",
            element: null,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
