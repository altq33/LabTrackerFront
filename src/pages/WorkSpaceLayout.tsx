import { Sidebar } from "components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const WorkSpaceLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
