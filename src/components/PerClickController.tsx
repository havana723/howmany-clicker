import styled from "@emotion/styled";
import { guilds } from "../constants/perClick";
import PerClickDisplay from "./PerClickDIsplay";

const Background = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PerClickController: React.FC = () => {
  return (
    <>
      <Background>
        {guilds.map((g) => (
          <PerClickDisplay guild={g} />
        ))}
      </Background>
    </>
  );
};

export default PerClickController;
