import brickHouse from "./img/บ้านอิฐ.png";
import theThirdPig from "./img/Pigscene3.png";
import wrench from "./img/wrench.png";
import thirdpigBG from "./img/bgscene3.png";
import wolf from "./img/wolf.png";
import cloudnsun from "./img/CloudnSun.png"
import cloudLeftLow from "./img/Cloud.png";
import cloudLeftHigh from "./img/Cloud2.png";
import cloudRight from "./img/CloudRight.png";

import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const ThirdPig = styled.div`
        width: 100%;
        height: 1200px;
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

        & .cloudnsun{
            position: absolute;
            width: 250px;
            animation: floatingsun infinite 3s ease-in-out;
        }

        & .plot{
            position: absolute;
            left: 10%;
            top: 50px;
            width: 80%;
            padding: 40px 100px;
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            box-sizing: border-box;
            border-radius: 2em;

            font-size: 1.5em;
            line-height: 2em;
            z-index: 10;
            color: rgb(112,112,112);
            font-family: 'Roboto', sans-serif;
        }

        & .plot span{
            font-size: 2em;
            font-weight: 800;
            color: black;
        }

        @keyframes floatingsun {
            0%   {top: 100px;right: 70px;}
            50%  {top: 90px;right: 70px;}
            100% {top: 100px;right: 70px;}
        }

        @keyframes wolfAnimation {
            0% {bottom: 300px;}
            20% {bottom: 300px;}
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
            50% {transform:rotate(10deg) scaleX(-1);}
            100% {transform:rotate(0deg) scaleX(-1);}
        }
`
const Clouds = styled.div`
        width: 100vw;
        position: absolute;
        top: 100px;
        left: 0;
        animation: cloudy 20s infinite linear;

        & > *{
            position: absolute;
        }
        
        & .cloudLeftLow {
            top: 100px;
            left: -80px;
            width: 200px;
        }

        & .cloudLeftHigh {
            top: 150px;
            left: -30px;
            width: 250px;
        }

        & .cloudRight {
            top: 10px;
            right: -200px;
        }

        & .cloudLeftLow.outframe{
            top: 100px;
            left: 120vw;
            width: 200px;
        }

        & .cloudLeftHigh.outframe {
            top: 150px;
            left: 124vw;
            width: 250px;
        }
        & .cloudRight.outframe {
            top: 10px;
            right: calc(-200px - 126vw);
        }


        @keyframes cloudy {
            0%{left:0%;}
            100%{left:-128%;}
        }
`

export default function ThirdPigComponent() {
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <ThirdPig>
            <img src={cloudnsun} alt="cloud" className="cloudnsun" />
            <Clouds>
                <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow" />
                <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh" />
                <img src={cloudRight} alt="cloud" className="cloudRight" />
                <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow outframe" />
                <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh outframe" />
                <img src={cloudRight} alt="cloud" className="cloudRight outframe" />
            </Clouds>
            <MountainBackground />
            <GrassGround />
            <img src={brickHouse} alt="brickHouse" className="brickHouse" />
            <TheThirdPig><img src={wrench} alt="wrench" className="wrench" /></TheThirdPig>
            <img src={wolf} alt="wolf" className="wolf" />
            <div className="plot" data-aos="fade-up">
                <p ><span>หมูตัวที่สาม</span> แสนขยันสร้างบ้านจากอิฐสุดแข็งแรง มันคิดว่าถึงจะเหนื่อยกว่า แต่ก็ต้องคุ้มเหนื่อย
                    แน่นอน พอหมูทั้งสองวิ่งมาถึง ก็เล่าเรื่องทั้งหมดให้ฟัง ทั้งสามจึงไปแอบในบ้านทันที
                    พอเจ้าหมาป่ามา เป่าเท่าไหร่บ้านก็ไม่เคลื่อนไหวจึงเลือกปีนปล่องไฟเข้าไปแต่เจ้าหมูก็เตรียมหม้อที่มีน้ำเดือดเอาไว้ใต้ปล่องไฟ
                    เจ้าหมาป่าจึงถูกจัดการในที่สุด ทั้งสามจึงรอดปลอดภัย และใช้ชีวิตอย่างมีความสุข </p>
            </div>
        </ThirdPig>
    )
}