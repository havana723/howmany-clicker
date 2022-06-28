import styled from "@emotion/styled";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { Weapon } from "../types/perSecond";
import { numberToString } from "../utils/format";

interface Props {
  weapon: Weapon;
}

const WeaponContainer = styled.div<{ level: number; maxLevel: number }>`
  width: 100%;
  border: 1px gray solid;
  color: ${({ level }) => (level ? "white" : "gray")};
  padding: 0px 20px;

  &:hover {
    background-color: ${({ level, maxLevel }) =>
      level === maxLevel ? "unset" : "#ffffff24"};
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const PerSecondDisplay: React.FC<Props> = (props) => {
  const gameState = useContext(GameStateContext);

  const weapon = props.weapon;
  const level =
    gameState.state.weaponStates.find((g) => g.weapon.id === weapon.id)
      ?.level || 0;
  const maxLevel = weapon.bonus.length - 1;

  function pressHandleUpgrade() {
    if (level === maxLevel) return;
    if (gameState.state.howmany < weapon.cost[level]) {
      alert("사람이 부족합니다!");
      return;
    }
    const newGuildStates = gameState.state.weaponStates.map((g) =>
      g.weapon.id === weapon.id ? { ...g, level: g.level + 1 } : g
    );
    const newPerSecond =
      gameState.state.perSecond - weapon.bonus[level] + weapon.bonus[level + 1];
    const newHowmany = gameState.state.howmany - weapon.cost[level];
    gameState.setGameState({
      ...gameState.state,
      weaponStates: newGuildStates,
      perSecond: newPerSecond,
      howmany: newHowmany,
    });
  }

  return (
    <>
      <WeaponContainer
        level={level}
        maxLevel={maxLevel}
        onClick={pressHandleUpgrade}
      >
        <TextContainer>
          <div>
            {weapon.displayName} LV.{level} (+
            {numberToString(weapon.bonus[level])})
          </div>
          {level === maxLevel ? (
            <div>MAX</div>
          ) : (
            <div>
              다음 +{weapon.bonus[level + 1]}/
              {numberToString(weapon.cost[level])} 명
            </div>
          )}
        </TextContainer>
      </WeaponContainer>
    </>
  );
};

export default PerSecondDisplay;
