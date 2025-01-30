import { Outlet } from "react-router";

export default function ProjectsLayout() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
