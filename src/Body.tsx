import * as React from "react";
import styled from "styled-components";

const Frame = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Top = styled.div`
  /* background: lightgoldenrodyellow; */
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

const Center = styled.div`
  flex: 3;
  background: lightgrey;
`;

const Bottom = styled.div`
  align-content: center;
  text-align: center;
  /* background: lightsalmon; */
`;

const Title = styled.h4`
  margin: 1em 0 0.5em;
`;
const Artist = styled.h5`
  margin: 0.5em 0 1em;
  font-weight: 100;
`;

const SubHeading = styled.h4`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 0.8em;
  margin: 16px 0 0;
`;
const Heading = styled.h2`
  margin: 0 0 16px;
  font-weight: 400;
  font-size: 1.25em;
`;

function Body() {
  return (
    <Frame>
      <Top>
        <SubHeading>Tuned into</SubHeading>
        <Heading>Synth-Pop</Heading>
      </Top>
      <Center />
      <Bottom>
        <Title>Sora Ni Mau Maboroshi</Title>
        <Artist>Mariah</Artist>
      </Bottom>
    </Frame>
  );
}

export default Body;
