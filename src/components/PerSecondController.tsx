import styled from "@emotion/styled";
import { weapons } from "../constants/perSecond";
import PerSecondDisplay from "./PerSecondDisplay";

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

const PerSecondController: React.FC = () => {
  return (
    <>
      <Background>
        {weapons.map((w) => (
          <>
            <PerSecondDisplay weapon={w} /> <div style={{ height: "15px" }} />
          </>
        ))}
        <div style={{ height: "40px" }} />
      </Background>
    </>
  );
};

export default PerSecondController;
