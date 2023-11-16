import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Database } from "../types/t";

export default function supabase(): SupabaseClient<Database> {
  const supabase = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  return supabase;
}
