import styled from "@emotion/styled";
import { useState } from "react";

interface State {
  state: "perClick" | "perSecont" | "Badge";
}

const Background = styled.div`
  background-color: black;
  position: absolute;
  height: 45%;
  width: 100%;
  bottom: 0;
  border: 1px white solid;
`;

const Tab = styled.div`
  position: absolute;
  height: 15%;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TabButton = styled.div<{ state: string; curState: string }>`
  height: 100%;
  width: 20%;
  text-align: center;
  border-bottom: ${({ state, curState }) =>
    state === curState ? "1px white solid" : "unset"};

  &:hover {
    border-bottom: 1px white solid;
  }
`;

const Controller: React.FC = () => {
  const [state, setState] = useState("perClick");
  return (
    <>
      <Background>
        <Tab>
          <TabButton state="perClick" curState={state}>
            소모임
          </TabButton>
          <TabButton state="perSecond" curState={state}>
            소품
          </TabButton>
          <TabButton state="Badges" curState={state}>
            뱃지
          </TabButton>
        </Tab>
      </Background>
    </>
  );
};

export default Controller;
