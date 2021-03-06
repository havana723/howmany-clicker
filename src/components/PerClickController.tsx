import styled from "@emotion/styled";
import { guilds } from "../constants/perClick";
import PerClickDisplay from "./PerClickDisplay";

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

const PerClickController: React.FC = () => {
  return (
    <>
      <Background>
        {guilds.map((g) => (
          <>
            <PerClickDisplay guild={g} /> <div style={{ height: "15px" }} />
          </>
        ))}
        <div style={{ height: "40px" }} />
      </Background>
    </>
  );
};

export default PerClickController;
