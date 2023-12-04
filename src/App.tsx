import { Link, useLocation, useRoute } from "wouter";

function App({ children }: any) {
  // TODO: check out https://www.npmjs.com/package/react-transition-group

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex flex-row flex-wrap items-center justify-between">
        <Link href="/">
          <a className="text-4xl">Apartment CRUD</a>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default App;
