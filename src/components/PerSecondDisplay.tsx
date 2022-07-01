import styled from "@emotion/styled";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { Weapon } from "../types/perSecond";
import { levelToBonus, levelToCostWeapon } from "../utils/cost";
import { numberToString } from "../utils/format";

interface Props {
  weapon: Weapon;
}

const WeaponContainer = styled.div<{
  level: number;
  maxLevel: number;
  disable: boolean;
}>`
  width: 100%;
  border: 1px gray solid;
  color: ${({ level, maxLevel, disable }) =>
    !disable && level != maxLevel ? "white" : "gray"};
  padding: 0px 20px;

  &:hover {
    background-color: ${({ level, maxLevel }) =>
      level === maxLevel ? "unset" : "#ffffff24"};
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
`;

const PerSecondDisplay: React.FC<Props> = (props) => {
  const gameState = useContext(GameStateContext);

  const weapon = props.weapon;
  const level =
    gameState.state.weaponStates.find((g) => g.weapon.id === weapon.id)
      ?.level || 0;
  const maxLevel = 50;

  function pressHandleUpgrade() {
    if (level === maxLevel) return;
    if (
      gameState.state.howmany <
      levelToCostWeapon(weapon.defaultNumber, weapon.constant, level + 1)
    ) {
      alert("사람이 부족합니다!");
      return;
    }
    const newGuildStates = gameState.state.weaponStates.map((g) =>
      g.weapon.id === weapon.id ? { ...g, level: g.level + 1 } : g
    );
    const newPerSecond =
      gameState.state.perSecond +
      levelToBonus(weapon.defaultNumber, weapon.constant, level + 1);
    const newHowmany =
      gameState.state.howmany -
      levelToCostWeapon(weapon.defaultNumber, weapon.constant, level + 1);
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
        disable={
          levelToCostWeapon(weapon.defaultNumber, weapon.constant, level + 1) >
          gameState.state.howmany
        }
        onClick={pressHandleUpgrade}
      >
        <TextContainer>
          <div>
            {weapon.displayName} LV.{level}
          </div>
          {level === maxLevel ? (
            <div>MAX</div>
          ) : (
            <div>
              다음 +
              {numberToString(
                levelToBonus(weapon.defaultNumber, weapon.constant, level + 1)
              )}
              /
              {numberToString(
                levelToCostWeapon(
                  weapon.defaultNumber,
                  weapon.constant,
                  level + 1
                )
              )}{" "}
              명
            </div>
          )}
        </TextContainer>
      </WeaponContainer>
    </>
  );
};

export default PerSecondDisplay;
