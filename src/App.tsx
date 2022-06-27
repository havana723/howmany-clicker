import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Sparkle from "react-sparkle";
import "./App.css";
import Controller from "./components/Controller";
import FloatingImage from "./components/FloatingImage";
import { GameStateContext } from "./contexts/GameStateContext";
import { defaultState, GameState } from "./types/game";
import { numberToString } from "./utils/format";

const Background = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  animation: hue 8s infinite linear;

  @keyframes hue {
    0% {
      background-color: black;
    }
    25% {
      background-color: #10132f;
    }
    75% {
      background-color: #1a0828;
    }
    100% {
      background-color: black;
    }
  }
`;

const GaemBoard = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  max-width: min(600px, calc(100vh / 1.5));
  margin: 0 auto;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vh;
`;

function App() {
  const initialStateRaw = localStorage.getItem("gameState");
  const [gameState, setGameState] = useState<GameState>(
    initialStateRaw ? (JSON.parse(initialStateRaw) as any) : defaultState
  );

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  return (
    <GameStateContext.Provider value={{ state: gameState, setGameState }}>
      <Background>
        <GaemBoard>
          <FloatingImage />
          <Text>{numberToString(gameState.howmany)} 명</Text>
          <Controller />
        </GaemBoard>
        <Sparkle
          count={50}
          fadeOutSpeed={10}
          flickerSpeed="slowest"
          overflowPx={0}
        />
        <div style={{ height: "10%" }} />
      </Background>
    </GameStateContext.Provider>
  );
}

export default App;
