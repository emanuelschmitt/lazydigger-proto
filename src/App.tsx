import * as React from "react";
import "./styles.css";
import styled from "styled-components";

import PlayButtonIcon from "./icons/PlayButton";
import PreviousSkipIcon from "./icons/PreviousSkip";
import NextSkipIcon from "./icons/NextSkip";
import IconButton from "./IconButton";
import HeartIcon from "./icons/HeartIcon";

import Body from "./Body";

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.4em;
  align-self: flex-start;
`;

const Navigation = styled.div`
  margin-left: auto;
`;

const NavigationList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationListItem = styled.li`
  display: inline-block;
  padding: 0 8px;

  &:last-of-type {
    padding-right: 0;
  }
`;

const Frame = styled.div`
  display: flex;
  height: 100vh;
  /* background: tomato; */
  flex-direction: column;
`;

const Navbar = styled.div`
  padding: 0 16px;
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0;
  /* flex: 1; */
`;

const PlayNavigation = styled.div`
  position: relative;
  background: darkgray;
  height: 4px;
  border-radius: 10px;
  margin: 10px 0;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background: black;
  border-radius: 10px;
`;

const ProgressDot = styled.div`
  position: absolute;
  top: 2px;
  bottom: 0;
  left: 50%;
  right: 0;
  height: 12px;
  width: 12px;
  background: black;
  border-radius: 50%;
  z-index: 100;
  transform: translate3d(-50%, -50%, 0);
  display: none;
`;

const ElapsedTime = styled.div`
  position: absolute;
  left: 8px;
  top: -1.5em;
  font-size: 0.8em;
`;

const RemainingTime = styled.div`
  position: absolute;
  right: 8px;
  top: -1.5em;
  font-size: 0.8em;
`;

const BottomBar = styled.div`
  align-self: flex-end;
  /* background: mediumseagreen; */
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px 10%;
  flex-direction: column;
  border-top: 2px solid black;
`;

const TopBar = styled.div`
  display: inline-flex;
  flex: 3;
`;

const Left = styled.div`
  flex: 1;
  /* outline: 1px solid red; */
`;

const Right = styled.div`
  flex: 1;
  /* outline: 1px solid red; */
  display: flex;
  justify-content: flex-end;
`;

export default function App() {
  return (
    <Frame>
      <Navbar>
        <Title>lazydigger</Title>
        <Navigation>
          <NavigationList>
            <NavigationListItem>Music</NavigationListItem>
            <NavigationListItem>About</NavigationListItem>
            <NavigationListItem>Login</NavigationListItem>
          </NavigationList>
        </Navigation>
      </Navbar>
      <Body />
      <BottomBar>
        <TopBar>
          <Left />
          <Controls>
            <IconButton
              icon={<PreviousSkipIcon />}
              style={{ fontSize: "1em" }}
            />
            <IconButton
              icon={<PlayButtonIcon />}
              style={{ fontSize: "2.5em" }}
            />
            <IconButton icon={<NextSkipIcon />} style={{ fontSize: "1em" }} />
          </Controls>
          <Right>
            <IconButton icon={<HeartIcon />} style={{ fontSize: "1em" }} />
          </Right>
        </TopBar>
        <PlayNavigation>
          <ProgressDot />
          <ProgressBar />
          <ElapsedTime>3:33</ElapsedTime>
          <RemainingTime>2:00</RemainingTime>
        </PlayNavigation>
      </BottomBar>
    </Frame>
  );
}
