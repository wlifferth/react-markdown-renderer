import React from "react";
import { createStore } from "redux";

import "./App.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import { reducer } from "./reducers";

const store = createStore(reducer, { text: "# Header 1\n- list item" });

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
