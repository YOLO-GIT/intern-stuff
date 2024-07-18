import { useState } from "react";
import Header from "./components/header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
    </>
  );
}

export default App;
