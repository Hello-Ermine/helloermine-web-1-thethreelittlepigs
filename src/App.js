import Scene1 from "./1stScene.js";
import Scene2 from "./2ndScene.js";
import styled from "styled-components";
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
      <Scene1 />

      <FadeTransitionGreen />
      <FadeTransitionBlue />
      <Scene2 />
    
      <ThirdPigComponent/>
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)"/>
      <IdeasComponent/>
      <Connector color="linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%)"/>
      <FooterComponent/>
    
    
    
    
import './App.css';
import Firstpage from './firstpage.js';
function App() {
  return (
    <div className="">
      <Firstpage/>
    </div>
  );
}

export default App;
