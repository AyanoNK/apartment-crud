import "./App.css";
import { useContext, useEffect, useState } from "react";
import { SupabaseContext } from "./main";
import { PostgrestError } from "@supabase/supabase-js";

function App() {
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    day: "numeric",
    month: "long",
    year: "numeric",
    minute: undefined,
    second: undefined,
  };
  const supabase = useContext(SupabaseContext);
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  async function getProjects() {
    const { data: projects, error } = await supabase
      .from("project")
      .select("*");

    setProjects(projects);
    setError(error);
  }

  useEffect(() => {
    getProjects();
    if (error) console.error(error);
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        {projects.length === 0 && <div>No projects</div>}
        {projects.map((project) => (
          <div className="flex flex-col border-red-500 border p-4 rounded">
            <span className="text-3xl font-bold pb-4">{project.name}</span>
            <span className="text-lg font-semibold">
              {project.address}, {project.city}
            </span>
            <span className="text-sm">
              To be finished in{" "}
              {new Intl.DateTimeFormat("en", options).format(
                Date.parse(project.delivery_date)
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
