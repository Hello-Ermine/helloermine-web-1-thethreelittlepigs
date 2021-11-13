import brickHouse from "./img/บ้านอิฐ.png";
import theThirdPig from "./img/Pigscene3.png";
import wrench from "./img/wrench.png";
import thirdpigBG from "./img/bgscene3.png";
import wolf from "./img/wolf.png";

import styled from "styled-components";

const ThirdPig = styled.div`
        width: 100%;
        height: 1000px;
        background-color: #F0F9FF;
        position: relative;
        overflow: hidden;

        & .brickHouse{
            bottom: 200px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            width: 1100px;
            z-index: 10;
        }
        & .theThirdPig{
            
        }
        & .wolf{
            bottom: 420px;
            right: 20vw;
            position: absolute;
            width: 180px;
            transform: scaleX(-1);
            z-index: 9;
            animation: wolfAnimation 8s linear infinite;
        }

        @keyframes wolfAnimation {
            0% {bottom: 300px;}
            10% {bottom: 300px;}
            30% {bottom: 420px;}
            50% {bottom: 420px;}
            51% {bottom: 430px;}
            52% {bottom: 420px;}
            53% {bottom: 430px;}
            54% {bottom: 420px;}
            55% {bottom: 430px;}
            56% {bottom: 420px;}
            57% {bottom: 430px;}
            58% {bottom: 420px;}
            70% {bottom: 420px;}
            90% {bottom: 300px;}
            100% {bottom: 300px;}
        }
`
const MountainBackground = styled.div`
        width: 100%;
        height: 900px;
        position: absolute;
        bottom: 340px;
        background-image: url(${thirdpigBG});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;    
`
const GrassGround = styled.div`
        position: absolute;
        bottom: -150px;
        width: 100%;
        height: 500px;
        background: rgba(143, 185, 34, 1);
`
const TheThirdPig = styled.div`
        width: 400px;
        height: 400px;
        background-image: url(${theThirdPig});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        bottom: -50px;
        right: 200px;
        position: absolute;
        z-index: 10;

        & .wrench{
            position: absolute;
            top: 200px;
            right: 70px;
            width: 100px;
            transform: scaleX(-1);
            animation: wrench 2s infinite ease-in-out;
        }

        @keyframes wrench{
            0% {transform:rotate(0deg) scaleX(-1);}
            50% {transform:rotate(5deg) scaleX(-1);}
            100% {transform:rotate(0deg) scaleX(-1);}
        }
`
export default function ThirdPigComponent() {
    return <ThirdPig>
        <MountainBackground/>
        <GrassGround />
        <img src={brickHouse} alt="brickHouse" className="brickHouse" />
        <TheThirdPig><img src={wrench} alt="wrench" className="wrench"/></TheThirdPig>
        <img src={wolf} alt="wolf" className="wolf" />
    </ThirdPig>
}