import React from "react";

import LoginModal from "./LoginModal";

import {
  TopBarWrapper,
  Container,
  ContainerLeft,
  ContainerCenter,
  ContainerRight
} from "./Styles/TopBar/TopBarStyles";

const TopBar = props => {
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
          <LoginModal handleAuth={props.handleAuth} />
        </ContainerRight>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar;
