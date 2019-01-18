import React from "react";

import {
  TopBarWrapper,
  Container,
  ContainerLeft,
  ContainerCenter,
  ContainerRight
} from "./Styles/TopBar/TopBarStyles";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          {/* When clicked launch modal */}
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar;
