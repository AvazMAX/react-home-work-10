import styled from "styled-components";
import "./App.css";
import { Header } from "./Header";

function App() {
  return (
    <ContApp>
      <DivApp>
        <Header />
      </DivApp>
    </ContApp>
  );
}

export default App;
const DivApp = styled.div`
  background-color: #fff;
  width: 800px;
  padding: 30px 30px 40px 30px;
  margin-top: 40px;
  border-radius: 12px;
`;
const ContApp = styled.div`
  display: flex;
  justify-content: center;
`;
