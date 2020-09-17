import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { render } from "react-dom";

const Preview = ({ rendered_markdown }) => {
  console.log(rendered_markdown);
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: rendered_markdown }}
    ></div>
  );
};

Preview.propTypes = {
  rendered_markdown: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  rendered_markdown: state.rendered_markdown,
});

export default connect(mapStateToProps, null)(Preview);
