import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import "@xyflow/react/dist/style.css";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import { ReactFlowProvider } from "@xyflow/react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ReactFlowProvider>
          <App />
        </ReactFlowProvider>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>,
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
