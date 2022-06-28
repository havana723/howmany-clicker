import styled from "@emotion/styled";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import { Guild } from "../types/perClick";
import { numberToString } from "../utils/format";

interface Props {
  guild: Guild;
}

const GuildContainer = styled.div<{ level: number; maxLevel: number }>`
  width: 100%;
  height: 20%;
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

const PerClickDisplay: React.FC<Props> = (props) => {
  const gameState = useContext(GameStateContext);
  const guild = props.guild;
  const level =
    gameState.state.guildStates.find((g) => g.guild.id === guild.id)?.level ||
    0;
  const maxLevel = guild.bonus.length - 1;

  function pressHandleUpgrade() {
    if (level === maxLevel) return;
    if (gameState.state.howmany < guild.cost[level]) {
      alert("사람이 부족합니다!");
      return;
    }
    const newGuildStates = gameState.state.guildStates.map((g) =>
      g.guild.id === guild.id ? { ...g, level: g.level + 1 } : g
    );
    const newPerClick =
      gameState.state.perClick - guild.bonus[level] + guild.bonus[level + 1];
    const newHowmany = gameState.state.howmany - guild.cost[level];
    gameState.setGameState({
      ...gameState.state,
      guildStates: newGuildStates,
      perClick: newPerClick,
      howmany: newHowmany,
    });
  }

  return (
    <>
      <GuildContainer
        level={level}
        maxLevel={maxLevel}
        onClick={pressHandleUpgrade}
      >
        <TextContainer>
          <div>
            {guild.displayName} LV.{level} (+
            {numberToString(guild.bonus[level])})
          </div>
          {level === maxLevel ? (
            <div>MAX</div>
          ) : (
            <div>
              다음 +{guild.bonus[level + 1]}/{guild.cost[level]} 명
            </div>
          )}
        </TextContainer>
      </GuildContainer>
    </>
  );
};

export default PerClickDisplay;
