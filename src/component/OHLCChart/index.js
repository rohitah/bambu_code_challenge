import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DrawChart from "./DrawChart";
import { stockItemList } from "../../config/index";

const ChartWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #ccc;
  padding: 10px;
`;

const ChartContent = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  min-width: 1120px;
  min-height: 650px;
  background: #fff;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const ChartMiddleContent = styled.div`
  text-align: center;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ccc;
`;

const ChartTitle = styled.div`
  font-size: 16px;
  color: #ccc;
  padding: 20px;
  width: 100%;
  text-align: left;
`;

const ChartPanel = ({ stockData, isLoading, stockCode, note }) => {
  // Get stock object by code
  const stockObj = stockItemList.find(item => item.symbol === stockCode);
  // Show welcome message for first time users
  let chartContent = (
    <ChartMiddleContent>
      <h2>Welcome to OHLC chart of a stock</h2>
      <br />
      <p>Select your favorite stock from left panel to see daily OHLC chart</p>
    </ChartMiddleContent>
  );
  // Draw Chart
  if (Object.keys(stockData).length) {
    chartContent = (
      <React.Fragment>
        <ChartTitle>
          <h2>{stockObj && stockObj.name}</h2>
        </ChartTitle>
        <DrawChart stockData={stockData} />
      </React.Fragment>
    );
  }
  // Show corresponding message to user
  if (note || isLoading) {
    chartContent = (
      <ChartMiddleContent>{note || "Loading..."}</ChartMiddleContent>
    );
  }
  return (
    <ChartWrapper>
      <ChartContent>{chartContent}</ChartContent>
    </ChartWrapper>
  );
};

ChartPanel.propTypes = {
  stockData: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool,
  stockCode: PropTypes.string,
  note: PropTypes.string
};

ChartPanel.defaultProps = {
  stockData: {},
  isLoading: false,
  stockCode: "",
  note: ""
};

export default ChartPanel;
