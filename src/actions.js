export const UPDATE_RAW_MARKDOWN = "UPDATE_RAW_MARKDOWN";
export const RENDER_MARKDOWN = "RENDER_MARKDOWN";

export const updateRawMarkdown = (raw_markdown) => {
  return {
    type: UPDATE_RAW_MARKDOWN,
    raw_markdown,
  };
};

export const renderMarkdown = () => ({
  type: RENDER_MARKDOWN,
});
