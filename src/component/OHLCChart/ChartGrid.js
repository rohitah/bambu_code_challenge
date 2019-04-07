import React from "react";
import PropTypes from "prop-types";

const ChartGrid = ({ item }) => {
  const xPosition = item + 100;
  return <line x1={xPosition} x2={xPosition} y1="10" y2="510" />;
};

ChartGrid.propTypes = {
  item: PropTypes.number.isRequired
};

export default ChartGrid;
