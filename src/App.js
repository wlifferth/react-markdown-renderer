import React from "react";

import "./App.scss";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
