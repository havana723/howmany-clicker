import styled from "@emotion/styled";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { Badge } from "../types/bagde";

interface Props {
  badge: Badge;
}

const BadgeContainer = styled.div`
  width: 100%;
  border: 1px gray solid;
  color: white;
  padding: 0px 20px;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  position: center;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
`;

const BadgeDisplay: React.FC<Props> = (props) => {
  const gameState = useContext(GameStateContext);

  const badge = props.badge;
  const unlocked = gameState.state.bagdeStates.find(
    (b) => b.badge.id === badge.id
  )?.unlocked;

  return (
    <>
      {unlocked ? (
        <BadgeContainer>
          <TextContainer>
            <div>
              {badge.displayName} - {badge.details}
            </div>
          </TextContainer>
        </BadgeContainer>
      ) : null}
    </>
  );
};

export default BadgeDisplay;
