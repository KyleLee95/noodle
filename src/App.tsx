import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import HomeLayout from "./layouts/home-layout";
import HomePage from "./pages/home";
import Editor from "./pages/editor";
import { AppSidebar } from "./components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-full w-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<AppLayout />}
        >
          <Route path="/">
            <Route element={<HomeLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Route>
        </Route>

        <Route path="projects/:projectId" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
