import React from "react";
import { connect } from "react-redux";

const DrawChart = () => {
  return (
    <svg width="100%" height="100%">
    </svg>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(DrawChart);
