import React from "react";

import {
  HeaderWrapper,
  Date,
  Temp
} from "../components/Styles/Header/HeaderStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderWrapper>
  );
};

export default Header;
