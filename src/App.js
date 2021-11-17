import Scene1 from "./1stScene.js";
import Scene2 from "./2ndScene.js";
import styled from "styled-components";
import FooterComponent from "./Footer.js";
import IdeasComponent from "./Ideas.js";
import ThirdPigComponent from "./ThirdPig.js";
import Firstpage from './firstpage.js';
import "./Font.css";

//scene fade transition
const FadeTransitionGreen = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    to top,
    rgb(119, 181, 0, 0),
    rgb(119, 181, 0, 1)
  );
`;
const FadeTransitionBlue = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    to bottom,
    rgb(240, 249, 255, 0),
    rgb(240, 249, 255, 1)
  );
`;
const Connector = styled.div`
    width: 100%;
    height: 200px;
    background: ${props => props.color};
    transform: translateY(-100px);
    position: absolute;
    z-index: 1;
`

function App() {
  return (
    <div className="App">
      <Firstpage />
      <Connector color="linear-gradient(0deg, rgba(119,191,1,0) 0%, rgba(119,191,1,1) 30%, rgba(119,191,1,1) 70%, rgba(119,191,1,0) 100%)"/>
      <Scene1 />
      <FadeTransitionGreen />
      <FadeTransitionBlue />
      <Scene2 />
      <Connector color="linear-gradient(0deg, rgba(119,191,1,0) 0%, rgba(119,191,1,1) 30%, rgba(119,191,1,1) 70%, rgba(119,191,1,0) 100%)"/>
      <ThirdPigComponent />
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 50%)"/>
      <IdeasComponent />
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 50%)" />
      <FooterComponent />
    </div>
  );
}

export default App;
