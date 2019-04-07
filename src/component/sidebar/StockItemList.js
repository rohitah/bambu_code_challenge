import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import StockItem from "./StockItem";
import { stockItemList } from "../../config/index";
import { getStockData } from "../../actionCreaters/stock";

const StockList = styled.ul`
  width: 300px;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ccc;
`;

class StockItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null
    };
  }

  componentDidMount() {
    const { getStockDataList } = this.props;
    const selectedOption =
      JSON.parse(localStorage.getItem("SelectedOption")) || "";
    this.setState({
      code: selectedOption.code
    });
    getStockDataList(selectedOption.code, "stockName");
  }

  setSelectedOption = stockCode => {
    localStorage.setItem(
      "SelectedOption",
      JSON.stringify({
        code: stockCode
      })
    );
  };

  handleItemClick = stockCode => {
    const { getStockDataList } = this.props;
    this.setState({
      code: stockCode
    });
    this.setSelectedOption(stockCode);
    getStockDataList(stockCode);
  };

  render() {
    const { code } = this.state;
    return (
      <StockList>
        {stockItemList.map(stock => (
          <StockItem
            isSelected={stock.symbol === code}
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
