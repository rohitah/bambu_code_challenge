import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.div`
  color: #fff;
  background: #2d2d2d;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = () => {
  return (
    <HeaderTitle>
      Stock Data Visualisation - Open-high-low-close Chart
    </HeaderTitle>
  );
};

export default Header;
