import FooterComponent from "./Footer.js";
import IdeasComponent from "./Ideas.js";
import ThirdPigComponent from "./ThirdPig.js";

import styled from "styled-components";

const Connector = styled.div`
    width: 100%;
    height: 200px;
    background: ${props => props.color};
    position: absolute;
    transform: translateY(-100px);
    z-index: 1;
`

function App() {
  return (
    <div className="App">
      <ThirdPigComponent/>
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)"/>
      <IdeasComponent/>
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)"/>
      <FooterComponent/>
    </div>
  );
}

export default App;
