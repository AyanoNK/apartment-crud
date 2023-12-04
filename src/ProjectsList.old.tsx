import "./App.css";
import { useContext, useEffect, useState } from "react";
import { SupabaseContext } from "./main";
import { PostgrestError } from "@supabase/supabase-js";
import { Link } from "wouter";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function ProjectsList() {
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
    <div className="flex flex-col gap-4">
      {projects.length === 0 && <div>No projects</div>}
      {projects.map((project) => (
        <Link
          href={`/${project.id}`}
          className="flex flex-col border-red-500 border p-4 rounded"
          key={project.id}
        >
          <div className="flex flex-row justify-between">
            <span className="text-2xl font-bold pb-4">{project.name}</span>
            <LinkIcon className="h-6 w-6 text-blue-500" />
          </div>
          <span className="text-md font-semibold">
            {project.address}, {project.city}
          </span>
          <span className="text-sm">
            Finishes in{" "}
            {new Intl.DateTimeFormat("en", options).format(
              Date.parse(project.delivery_date)
            )}
          </span>
        </Link>
      ))}
    </div>
  );
}
