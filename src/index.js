import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { renderMarkdown } from "./actions";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

import raw from "raw.macro";

const initialMarkdown = raw("./initialMarkdown.md");

const store = createStore(reducer, {
  raw_markdown: initialMarkdown,
  rendered_markdown: "",
});

store.dispatch(renderMarkdown());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </React.StrictMode>,

  document.getElementById("root")
);
