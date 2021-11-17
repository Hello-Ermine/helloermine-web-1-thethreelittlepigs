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
    height: 100px;
    background: ${props => props.color};
    position: relative;
    z-index: 1;
`

function App() {
  return (
    <div className="App">
      <Firstpage />
      <Connector color="linear-gradient(0deg, rgba(119, 186, 38, 0) 0%, 
      rgba(119, 186, 38, 1) 30%)"/>
      <Scene1 />
      <FadeTransitionGreen />
      <FadeTransitionBlue />
      <Scene2 />
      <Connector color="linear-gradient(0deg, rgba(119, 191, 1, 0) 0%, rgba(119, 191, 1, 1) 30%)"/>
      <ThirdPigComponent />
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)"/>
      <IdeasComponent /> 
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)" />
      <FooterComponent />
    </div>
  );
}

export default App;
