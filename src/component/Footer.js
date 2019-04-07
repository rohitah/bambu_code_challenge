import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  min-width: 100%;
  background-color: #ededed;
  height: 70px;
  color: grey;
  font-size: 9pt;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <FooterText>
      Displays a daily OHLC chart of a stock of a user’s choice
    </FooterText>
  );
};

export default Footer;
