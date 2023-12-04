import { Link, useLocation } from "wouter";

function App({ children }: any) {
  const [location] = useLocation();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row flex-wrap items-center justify-between">
        <Link href="/">
          <a className="text-4xl">Projects</a>
        </Link>
        {location === "/" && (
          <Link href="/project/new">
            <a className="text-md">Add project</a>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

export default App;
