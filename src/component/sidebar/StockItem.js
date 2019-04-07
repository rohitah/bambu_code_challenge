import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StockElement = styled.li``;
const ButtonElement = styled.a`
  width: 100%;
  height: 40px;
  background: #fff;
  display: block;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  font-size: 14px;
  color: gray;
  text-decoration: none;
`;

const StockItem = ({ itemClick, stockName, stockSymbole, isSelected }) => {
  return (
    <StockElement>
      <ButtonElement
        href="#"
        className={isSelected ? "selectedItem" : ""}
        onClick={() => itemClick(stockSymbole)}
      >
        {stockName}
      </ButtonElement>
    </StockElement>
  );
};

StockItem.propTypes = {
  itemClick: PropTypes.func.isRequired,
  stockName: PropTypes.string.isRequired,
  stockSymbole: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default StockItem;
