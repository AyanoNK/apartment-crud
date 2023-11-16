import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { Dispatch, SetStateAction } from "react";

export async function getProjects(
  supabaseClient: SupabaseClient,
  setProjects: Dispatch<SetStateAction<any[]>>,
  setError: Dispatch<SetStateAction<PostgrestError | null>>
) {
  const { data: projects, error } = await supabaseClient
    .from("project")
    .select("*");

  setProjects(projects ?? []);
  setError(error ?? null);
}
