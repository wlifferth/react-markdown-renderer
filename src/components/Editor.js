import React from "react";
import { connect } from "react-redux";
import { updateRawMarkdown } from "../actions";
import PropTypes from "prop-types";

const Editor = ({ raw_markdown, onChange }) => {
  return (
    <div>
      <h1>Markdown Renderer</h1>
      <textarea id="editor" value={raw_markdown} onChange={onChange} />
    </div>
  );
};

Editor.propTypes = {
  raw_markdown: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  raw_markdown: state.raw_markdown,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(updateRawMarkdown(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
