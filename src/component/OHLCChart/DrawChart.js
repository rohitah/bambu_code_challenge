import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ChartGrid from "./ChartGrid";
import ChartElement from "./ChartElement";
import { monthList } from "../../config";

const GroupElement = styled.g`
  stroke: #ccc;
  stroke-dasharray: 0;
  stroke-width: 1;
`;

const GridGroupElement = styled.g`
  stroke: #ccc;
  stroke-dasharray: 4;
  stroke-width: 1;
`;

const DrawChart = ({ stockData }) => {
  // Convert string to numbers with 2 decimal places max
  const formateNumber = val => +parseFloat(val).toFixed(2);

  // Round up number
  const roundToNearest = (numToRound, numToRoundTo) =>
    Math.round(numToRound / numToRoundTo) * numToRoundTo;

  // Process Stock data response
  const processStockData = data =>
    Object.entries(data)
      .reverse()
      .map(chartData => {
        const newChartData = {};
        newChartData.open = formateNumber(chartData[1]["1. open"]);
        newChartData.high = formateNumber(chartData[1]["2. high"]);
        newChartData.low = formateNumber(chartData[1]["3. low"]);
        newChartData.close = formateNumber(chartData[1]["4. close"]);
        // eslint-disable-next-line prefer-destructuring
        newChartData.date = chartData[0];
        return newChartData;
      });
  // Get array min/max value
  const getArrayMinMaxVal = (arr, type) => {
    const value = arr.reduce((p, v) => {
      if (type === "min") {
        return p.low < v.low ? p : v;
      }
      return p.high > v.high ? p : v;
    });
    if (type === "min") {
      return Math.floor(value.low) || value.low;
    }
    return value.high > 1 ? Math.ceil(value.high) : value.high;
  };

  const processedData = processStockData(stockData);

  //---------------------------------------------------------------
  // get MIN/MAX values from data set
  const maxVal = getArrayMinMaxVal(processedData, "max");
  const minVal = getArrayMinMaxVal(processedData, "min");

  const gap = (maxVal - minVal) / 10;
  //---------------------------------------------------------------
  // Calculate number of sections in Y Axis
  const roundedGap =
    roundToNearest(gap, 10 ** (parseInt(gap, 10).toString().length - 1)) || gap;
  const yDividInto = Math.ceil((maxVal - minVal) / roundedGap) || 10;
  return (
    <svg width="100%" height="100%">
      <GridGroupElement>
        {[...Array(100)].map((e, key) => {
          const itemKey = key;
          return <ChartGrid key={itemKey} item={key * 10} />;
        })}
      </GridGroupElement>
      <GroupElement>
        {processedData.map((chartData, key) => {
          return (
            <ChartElement
              key={chartData.date}
              index={key}
              data={chartData}
              maxVal={maxVal}
              minVal={minVal}
            />
          );
        })}
      </GroupElement>
      <GroupElement>
        <line x1="90" x2="90" y1="510" y2="10" />
        <line x1="90" x2="1100" y1="510" y2="510" />
      </GroupElement>
      <GroupElement>
        {[...Array(yDividInto + 1)].map((e, i) => {
          const yPosition = i * (500 / yDividInto) + 15;
          return (
            <React.Fragment key={yPosition}>
              <text x="80" key={yPosition} y={yPosition} textAnchor="end">
                {+(minVal + roundedGap * (yDividInto - i)).toFixed(2)}
              </text>
              <line
                x1="85"
                y1={yPosition - 5}
                x2="90"
                y2={yPosition - 5}
                strokeWidth={2}
                stroke="#000"
              />
            </React.Fragment>
          );
        })}
      </GroupElement>
      <GroupElement>
        {[...Array(11)].map((e, i) => {
          const xPosition = 100 + i * 99;
          const arrIndex = (i * 10 || 1) - 1;
          const dateObj = new Date(processedData[arrIndex].date);
          return (
            <React.Fragment key={xPosition}>
              <line
                x1={xPosition}
                y1="510"
                x2={xPosition}
                y2="515"
                strokeWidth="2"
                stroke="#000"
              />
              <text x={xPosition} y="530" textAnchor="middle">
                {dateObj.getDate()} {monthList[dateObj.getMonth()]}
              </text>
            </React.Fragment>
          );
        })}
      </GroupElement>
    </svg>
  );
};

DrawChart.propTypes = {
  stockData: PropTypes.objectOf(PropTypes.any)
};

DrawChart.defaultProps = {
  stockData: {}
};

export default DrawChart;
