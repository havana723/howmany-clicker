import styled from "@emotion/styled";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { Guild } from "../types/perClick";
import { levelToBonus, levelToCostGuild } from "../utils/cost";
import { numberToString } from "../utils/format";

interface Props {
  guild: Guild;
}

const GuildContainer = styled.div<{
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

const PerClickDisplay: React.FC<Props> = (props) => {
  const gameState = useContext(GameStateContext);

  const guild = props.guild;
  const level =
    gameState.state.guildStates.find((g) => g.guild.id === guild.id)?.level ||
    0;
  const maxLevel = 50;

  function pressHandleUpgrade() {
    if (level === maxLevel) return;
    if (
      gameState.state.howmany <
      levelToCostGuild(guild.defaultNumber, guild.constant, level + 1)
    ) {
      alert("사람이 부족합니다!");
      return;
    }

    const newGuildStates = gameState.state.guildStates.map((g) =>
      g.guild.id === guild.id ? { ...g, level: g.level + 1 } : g
    );
    const newPerClick =
      gameState.state.perClick +
      levelToBonus(guild.defaultNumber, guild.constant, level + 1);
    const newHowmany =
      gameState.state.howmany -
      levelToCostGuild(guild.defaultNumber, guild.constant, level + 1);
    const newPurchases = gameState.state.purchases + 1;
    gameState.setGameState({
      ...gameState.state,
      guildStates: newGuildStates,
      perClick: newPerClick,
      howmany: newHowmany,
      purchases: newPurchases,
    });
  }

  return (
    <>
      <GuildContainer
        level={level}
        maxLevel={maxLevel}
        disable={
          levelToCostGuild(guild.defaultNumber, guild.constant, level + 1) >
          gameState.state.howmany
        }
        onClick={pressHandleUpgrade}
      >
        <TextContainer>
          <div>
            {guild.displayName} LV.{level}
          </div>
          {level === maxLevel ? (
            <div>MAX</div>
          ) : (
            <div>
              다음 +
              {numberToString(
                levelToBonus(guild.defaultNumber, guild.constant, level + 1)
              )}
              /
              {numberToString(
                levelToCostGuild(guild.defaultNumber, guild.constant, level + 1)
              )}{" "}
              명
            </div>
          )}
        </TextContainer>
      </GuildContainer>
    </>
  );
};

export default PerClickDisplay;
