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


function App() {
  return (
    <div className="App">
      <Scene1 />

      <FadeTransitionGreen />
      <FadeTransitionBlue />
      <Scene2 />
    </div>
  );
}

export default App;
