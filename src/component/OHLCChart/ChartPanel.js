import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import DrawChart from "./DrawChart";

const ChartContent = styled.div`
  text-align: center;
  width: 96%;
  height: 90%;
  min-width:1140px;
  min-height:650px;
  background: #fff;
  margin: auto;
  margin-top 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const ChartPanel = () => {
  return (
    <ChartContent>
      <ChartMiddleContent>
        <h2>Welcome to OHLC chart of a stock</h2>
        <br />
        <p>
          Select your favorite stock from left panel to see daily OHLC chart
        </p>
      </ChartMiddleContent>
    </ChartContent>
  );
};

ChartPanel.propTypes = {
};

ChartPanel.defaultProps = {
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
)(ChartPanel);
