import { useState } from "react";
import Header from "./components/header";
import DocumentList from "./components/documentList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <DocumentList />
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
    </>
  );
}

export default App;
