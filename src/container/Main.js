import React from "react";
import { Normalize } from "styled-normalize";
import styled from "styled-components";
import StockItemList from "../component/sidebar/StockItemList";
import ChartPanel from "../component/OHLCChart/ChartPanel";

const MainWrapper = styled.div`
  display: flex;
  background: #ccc;
  flex-direction: column;
  min-height: 100%;
  width: fit-content;
`;

const Header = styled.div`
  color: #fff;
  background: #2d2d2d;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contener = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;
const Footer = styled.div`
  min-width: 100%;
  background-color: #ededed;
  height: 50px;
  color: grey;
  font-size: 9pt;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const OHLCChart = styled.div`
  width: 100%;
  min-height: 100%;
  background: #ccc;
`;

const Main = () => {
  return (
    <React.Fragment>
      <Normalize />
      <MainWrapper>
        <Header>Stock Data Visualisation - Open-high-low-close Chart</Header>
        <Contener>
          <StockItemList />
          <OHLCChart>
            <ChartPanel />
          </OHLCChart>
        </Contener>
        <Footer>
          Displays a daily OHLC chart of a stock of a user’s choice
        </Footer>
      </MainWrapper>
    </React.Fragment>
  );
};

export default Main;
