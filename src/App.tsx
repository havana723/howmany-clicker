import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
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

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const initialStateRaw = localStorage.getItem("gameState");
  const [gameState, setGameState] = useState<GameState>(
    initialStateRaw
      ? { ...defaultState, ...(JSON.parse(initialStateRaw) as any) }
      : defaultState
  );

  function unlockBadge(badgeId: string) {
    setGameState((prevGameState) => ({
      ...prevGameState,
      badgeStates: prevGameState.badgeStates.map((b) =>
        b.badge.id === badgeId ? { ...b, unlocked: true } : b
      ),
    }));
  }

  function unlockBadgeHowmany(howmany: number) {
    if (howmany >= 1000) unlockBadge("first1000");
    else if (howmany >= 1e10) unlockBadge("first1e10");
    else if (howmany >= 1e20) unlockBadge("first1e20");
    else if (howmany >= 1e50) unlockBadge("first1e50");
    else if (howmany >= 1e100) unlockBadge("first1e100");
    else if (howmany >= 1e300) unlockBadge("first1e300");
    else if (!isFinite(howmany)) unlockBadge("firstInfinity");
  }

  function unlockBadgeClicks(clicks: number) {
    if (clicks >= 10) unlockBadge("firstClick10");
    else if (clicks >= 1000) unlockBadge("firstClick1000");
    else if (clicks >= 1e8) unlockBadge("firstClick1e8");
    else if (clicks >= 1e10) unlockBadge("firstClick1e10");
  }

  function unlockBadgePurchases(purchases: number) {
    if (purchases >= 1) unlockBadge("firstPurchase1");
    else if (purchases >= 10) unlockBadge("firstPurchase10");
    else if (purchases >= 100) unlockBadge("firstPurchase100");
  }

  function unlockBadgeDate(date: Date) {
    const now = new Date();
    const time = now.getTime() - date.getTime();
    if (time >= 1000 * 60 * 10) unlockBadge("time10min");
    else if (time >= 1000 * 60 * 60) unlockBadge("time1hour");
    else if (time >= 1000 * 60 * 60 * 24) unlockBadge("time1day");
    else if (time >= 1000 * 60 * 60 * 24 * 7) unlockBadge("time7day");
  }

  useInterval(() => {
    unlockBadge("start");
    setGameState((prevGameState) => ({
      ...prevGameState,
      howmany: gameState.howmany + gameState.perSecond,
    }));

    unlockBadgeHowmany(gameState.howmany);
    unlockBadgeClicks(gameState.clicks);
    unlockBadgePurchases(gameState.purchases);
    unlockBadgeDate(new Date(gameState.startTime));
  }, 1000);

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
