import styled from "@emotion/styled";
import { badges } from "../constants/badges";
import BadgeDisplay from "./BadgeDisplay";

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  gap: 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BadgeController: React.FC = () => {
  return (
    <>
      <Background>
        {badges.map((b) => (
          <>
            <BadgeDisplay badge={b} /> <div style={{ height: "15px" }} />
          </>
        ))}
        <div style={{ height: "40px" }} />
      </Background>
    </>
  );
};

export default BadgeController;
