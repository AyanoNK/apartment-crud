import { Link } from "wouter";

function App({ children }: any) {
  return (
    <div className="flex flex-col gap-4 min-w-full">
      <div className="flex flex-row flex-wrap justify-between">
        <Link href="/">
          <a className="link">Projects</a>
        </Link>
        <Link href="/project/new">Add project</Link>
      </div>
      {children}
    </div>
  );
}

export default App;
