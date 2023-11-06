import { Sidebar } from "components/Sidebar";
import { Outlet } from "react-router-dom";

export const WorkSpaceLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
