import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Route } from "wouter";

import supabase from "./client/supabase.ts";
import ProjectsList from "./ProjectsList.tsx";
import ApartmentsList from "./ApartmentsList.tsx";
import ProjectForm from "./ProjectForm.tsx";

export const SupabaseContext = createContext({} as any);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseContext.Provider value={supabase()}>
      <App>
        <Route path="/" component={ProjectsList} />
        <Route path="/:projectId" component={ApartmentsList} />
        <Route path="/project/new" component={ProjectForm} />
        <Route path="/:projectId/apartment/new" component={ProjectForm} />
      </App>
    </SupabaseContext.Provider>
  </React.StrictMode>
);
