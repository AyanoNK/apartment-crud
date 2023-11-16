import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import supabase from "./client/supabase.ts";

export const SupabaseContext = createContext({} as any);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseContext.Provider value={supabase()}>
      <RouterProvider router={router} />
    </SupabaseContext.Provider>
  </React.StrictMode>
);
