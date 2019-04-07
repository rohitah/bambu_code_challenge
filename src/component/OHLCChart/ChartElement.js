import React from "react";
import PropTypes from "prop-types";

const chartMaxVal = 510;
const chartHight = 500;
const chartPaddigLeft = 100;
const yGap = 10;

const ChartElement = ({ index, data, maxVal, minVal }) => {
  const unitSize = chartHight / (maxVal - minVal);
  const xPosition = index * yGap + chartPaddigLeft;
  const strokeColor = data.open > data.close ? "#ee1111" : "#00a300";

  function getYPosition(val) {
    return +(chartMaxVal - (val - minVal) * unitSize).toFixed(2);
  }

  return (
    <path
      strokeWidth="2"
      fill="none"
      stroke={strokeColor}
      d={`M ${xPosition},
              ${getYPosition(data.high)}
          L ${xPosition},
              ${getYPosition(data.low)}     
          M ${xPosition},
              ${getYPosition(data.open)}
          L ${xPosition - 5},
              ${getYPosition(data.open)}      
          M ${xPosition},
              ${getYPosition(data.close)}
          L ${xPosition + 5},
              ${getYPosition(data.close)}`}
    />
  );
};

ChartElement.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  minVal: PropTypes.number.isRequired
};

export default ChartElement;
