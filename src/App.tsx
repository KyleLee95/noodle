import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import Editor from "./pages/editor";
import { AppSidebar } from "./components/ui/app-sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import EditorMenuBar from "./components/ui/editor-menubar";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen w-screen">
        <span>
          <EditorMenuBar />
        </span>
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
          <Route path="/" element={<HomePage />} />
          <Route path="projects/">
            <Route path=":projectId" element={<Editor />} />
          </Route>

          <Route path="settings/" element={<>Settings</>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
