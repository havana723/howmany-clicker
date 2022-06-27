import styled from "@emotion/styled";
import React, { useContext } from "react";
import img0 from ".././img/137_0.png";
import img1 from ".././img/137_1.png";
import img2 from ".././img/137_2.png";
import img3 from ".././img/137_3.png";
import img4 from ".././img/137_4.png";
import img5 from ".././img/137_5.png";
import img6 from ".././img/137_6.png";
import { GameStateContext } from "../contexts/GameStateContext";

const imgs = [img0, img1, img2, img3, img4, img5, img6];

const ImgDiv = styled.div`
  position: relative;
  height: 40%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 15px #4078909c);
  }
`;

const Img = styled.img`
  height: 100%;
  animation: floating 4s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translate(0, 0vh);
    }
    50% {
      transform: translate(0, 3vh);
    }
    100% {
      transform: translate(0, -0vh);
    }
  }
`;

const ImgContainer = styled.div`
  height: min(70%, 100vw);
  animation: rotating 11s ease-in-out infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(8deg);
    }
    75% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(-0deg);
    }
  }
`;

const FloatingImage: React.FC = () => {
  const gameState = useContext(GameStateContext);
  const mx_cnt = 6;
  const cnt = gameState.state.howmany;

  return (
    <>
      <ImgDiv>
        <ImgContainer
          onClick={() =>
            gameState.setGameState({
              ...gameState.state,
              howmany: gameState.state.howmany + 1,
            })
          }
        >
          {Math.floor(cnt / 1000) <= mx_cnt ? (
            <Img src={imgs[Math.floor(cnt / 1000)]} />
          ) : (
            <Img src={imgs[mx_cnt]} />
          )}
        </ImgContainer>
      </ImgDiv>
    </>
  );
};

export default FloatingImage;
