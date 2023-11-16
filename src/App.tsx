import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createClient } from "@supabase/supabase-js";

function App() {
  const [count, setCount] = useState(0);
  const supabase = createClient(
    "https://ghavshtwflsyezzlvyhq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoYXZzaHR3ZmxzeWV6emx2eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwOTgwMzUsImV4cCI6MjAxNTY3NDAzNX0.WpgyyfxfUmArGpT2g8K_ZdHXMpbiETWU87CSkQD25WM"
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase.from("project").select();
    console.log(data, error);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="bg-white text-black text-4xl">Arroz con lecha</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
