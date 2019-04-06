import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import StockItem from "./StockItem";
import stocks from "../../config/stockSymbol";
import { getStockData } from "../../actionCreaters/stock";

const StockList = styled.ul`
  width: 300px;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ccc;
`;

class StockItemList extends Component {
  handleItemClick = stockCode => {
    const { getStockDataList } = this.props;
    this.setSelectedOption(stockCode);
    getStockDataList(stockCode);
  };

  render() {
    return (
      <StockList>
        {stocks.map(stock => (
          <StockItem
            key={stock.symbol}
            stockName={stock.name}
            stockSymbole={stock.symbol}
            itemClick={this.handleItemClick}
          />
        ))}
      </StockList>
    );
  }
}

StockItemList.propTypes = {
  getStockDataList: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getStockDataList: getStockData
};

export default connect(
  null,
  mapDispatchToProps
)(StockItemList);
