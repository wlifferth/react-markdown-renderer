import { UPDATE_RAW_MARKDOWN, RENDER_MARKDOWN } from "./actions";
import marked from "marked";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RAW_MARKDOWN:
      return Object.assign({}, state, {
        raw_markdown: action.raw_markdown,
        rendered_markdown: marked(action.raw_markdown),
      });
    case RENDER_MARKDOWN:
      return Object.assign({}, state, {
        rendered_markdown: marked(state.raw_markdown),
      });
    default:
      return state;
  }
};
