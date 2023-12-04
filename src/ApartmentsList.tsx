import "./App.css";
import { Suspense, useContext } from "react";
import { SupabaseContext } from "./main";
import { suspend } from "suspend-react";
import ListLoading from "./components/ListLoading";
import { Link, useLocation } from "wouter";

export default function ProjectsList({ params }: any) {
  const supabase = useContext(SupabaseContext);
  const [location] = useLocation();

  const List = () => {
    const data = suspend(async () => {
      const { data: apartments, error } = await supabase
        .from(" apartment")
        .select("*")
        .eq("project", params.projectId);
      return { apartments, error };
    }, [location]);

    const { apartments, error } = data;

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl">Apartments</h3>
          <Link href="/apartment/new">
            <a className="text-md">Add apartment</a>
          </Link>
        </div>
        {apartments.length === 0 && (
          <div className="flex flex-col gap-y-4">
            <span>No apartments</span>
            <Link href="/">
              <a className="text-md">Go back to projects...</a>
            </Link>
          </div>
        )}
        {error && <div>Error: {error.message}</div>}
      </div>
    );
  };

  return (
    <Suspense fallback={<ListLoading />}>
      <List />
    </Suspense>
  );
}
