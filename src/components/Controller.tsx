import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { numberToString } from "../utils/format";
import BadgeController from "./BadgeController";
import PerClickController from "./PerClickController";
import PerSecondController from "./PerSecondController";

interface State {
  state: "perClick" | "perSecond" | "badge";
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
  white-space: nowrap;
  border-bottom: ${({ state, curState }) =>
    state === curState ? "1px white solid" : "unset"};

  &:hover {
    border-bottom: 1px white solid;
  }
`;

const Controller: React.FC = () => {
  const gameState = useContext(GameStateContext);

  const [state, setState] = useState("perClick");

  return (
    <>
      <Background>
        <Tab>
          <TabButton
            state="perClick"
            curState={state}
            onClick={() => setState("perClick")}
          >
            소모임(+{numberToString(gameState.state.perClick)})
          </TabButton>
          <TabButton
            state="perSecond"
            curState={state}
            onClick={() => setState("perSecond")}
          >
            소품(+{numberToString(gameState.state.perSecond)})
          </TabButton>
          <TabButton
            state="badge"
            curState={state}
            onClick={() => setState("badge")}
          >
            뱃지
          </TabButton>
        </Tab>
        {state === "perClick" ? <PerClickController /> : null}
        {state === "perSecond" ? <PerSecondController /> : null}
        {state === "badge" ? <BadgeController /> : null}
      </Background>
    </>
  );
};

export default Controller;
