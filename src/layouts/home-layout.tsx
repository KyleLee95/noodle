import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <Outlet />
    </div>
  );
}
