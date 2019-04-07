import React from "react";
import { Normalize } from "styled-normalize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import StockItemList from "../component/sidebar/StockItemList";
import OhlcChart from "../component/OHLCChart";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MainWrapper = styled.div`
  display: flex;
  background: #ccc;
  flex-direction: column;
  min-height: 100%;
  width: fit-content;
`;
const Contener = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;

const Main = ({ stockData, isLoading, note, stockCode }) => {
  return (
    <React.Fragment>
      <Normalize />
      <MainWrapper>
        <Header />
        <Contener>
          <StockItemList />
          <OhlcChart
            stockData={stockData}
            isLoading={isLoading}
            stockCode={stockCode}
            note={note}
          />
        </Contener>
        <Footer />
      </MainWrapper>
    </React.Fragment>
  );
};

Main.propTypes = {
  stockData: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool,
  stockCode: PropTypes.string,
  note: PropTypes.string
};

Main.defaultProps = {
  stockData: {},
  isLoading: false,
  stockCode: "",
  note: ""
};

const mapStateToProps = state => {
  return {
    stockData: state.stockData,
    isLoading: state.loading,
    stockCode: state.stockCode,
    note: state.note
  };
};

export default connect(
  mapStateToProps,
  null
)(Main);
