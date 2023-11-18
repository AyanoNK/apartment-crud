import { Link } from "wouter";

function App({ children }: any) {
  return (
    <div className="flex flex-col gap-4 min-w-full">
      <div className="flex flex-row flex-wrap gap-2">
        <Link href="/">
          <a className="link">Projects</a>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default App;
