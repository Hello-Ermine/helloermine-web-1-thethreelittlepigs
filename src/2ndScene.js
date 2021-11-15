/* 

Scene 2

หมูตัวที่สอง
สร้างบ้านจากไม้เพราะมันง่ายและดูแข็งแรงดี
พอหมูตัวแรกวิ่งมาถึงเจ้าหมาป่าก็วิ่งตามมาติดๆ
ทั้งสองเลยวิ่งไปหลบในบ้านไม้ แต่ก็โดนเจ้าหมาป่าเป่าบ้านจนปลิวไปอยู่ดี
ทั้งสองรีบหนีอีกครั้ง
โดยครั้งนี้วิ่งไปที่บ้านเจ้าหมูตัวที่สาม


framing 13/11/21
animation 14/11/21
*/

//photo PATH
import BGS2 from "./img/Sc2/BgScene2.png";
import cloud1 from "./img/Sc2/Cloud1.png";
import cloud3 from "./img/Sc2/Cloud3.png";
import PigS2 from "./img/Sc2/PigScene2.png";
import wolf from "./img/Sc2/wolf_flip.png";
import House2 from "./img/Sc2/บ้านไม้.png";
import Saw from "./img/Sc2/SawScene2.png";

//dependency & font
import "./Font.css";
import styled from "styled-components";

//sky + animation
const SkyZone = styled.div`
  width: 100vw;
  position: absolute;
  top: 20px;
  left: 0;
  animation: cloudSlide 80s infinite linear;

  & > * {
    position: absolute;
  }

  & .cloud1 {
    top: 10px;
    left: -100px;
    width: 250px;
  }

  & .cloud3 {
    top: 10px;
    right: -200px;
  }

  & .cloud1.outframe {
    top: 100px;
    left: 124vw;
    width: 250px;
  }

  & .cloud3.outframe {
    top: 10px;
    right: calc(-200px - 126vw);
  }

  @keyframes cloudSlide {
    0% {
      left: 0%;
    }
    100% {
      left: -128%;
    }
  }
`;

//main div
const Scene2 = styled.div`
        width: 100%;
        height: 990px;
        background-color: #F0F9FF;
        position: relative;
        overflow: hidden;

        & .House{
            bottom: 250px;
            left: 40%;
            transform: translateX(-50%);
            position: absolute;
            width: 350px;
            z-index: 10;
        }
      
        & .wolf{
            right: 65%;
            top: 570px;
            position: absolute;
            width: 120px;
            animation: wolfSlideShow2 10s linear infinite;
        }

        @keyframes wolfSlideShow2 {
            0% {
                right: 60%;
            }
            30% {
                right: 65%;
            }
            40% {
                right: 65%;
            }
            50% {
                right: 65%;
            }
            60% {
                right: 65%;
            }
            70% {
                right: 65%;
            }
            100% {
                right: 60%;
            }
        }

        & p{
            position: absolute;
            left 50%;
            top: 70px;
            border-radius: 25px;
            background-color: rgba(255,255,255,0.3);
            background-size: cover;
            background-repeat: no-repeat;
            padding: 20px;
            transform: translateX(-50%);
            width: 52%;
            font-size: 1.5em;
            line-height: 2em;
            z-index: 10;
            color: rgb(80, 80, 80);
            font-family: 'Itim', cursive;
        }

        & p span{
            font-size: 2em;
            font-weight: 800;
            color: black;
        }
`;

//scene background
const BackgroundScene2 = styled.div`
  width: 100%;
  height: 990px;
  position: absolute;
  background-image: url(${BGS2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

//pig&tool + animation
const Pig2 = styled.div`
  width: 300px;
  height: 300px;
  bottom: 150px;
  right: 200px;
  position: absolute;
  z-index: 10;
  transform: translate(0, -100);
  background-image: url(${PigS2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  animation: SawSwing 3s infinite ease-in-out;

  & .saw {
    width: 150px;
    position: absolute;
    transform: rotate(-20deg);
    top: 80px;
    right: 200px; 
  }

  @keyframes PigSwing {
    0% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(5deg);
    }
  }
`;

//export scene2
export default function FrameScene2() {
  return (
      <Scene2>

          <SkyZone>
              <img src={cloud1} alt="cloud" className="cloud1" />
              <img src={cloud3} alt="cloud" className="cloud3" />
              <img src={cloud1} alt="cloud" className="cloud1 outframe" />
              <img src={cloud3} alt="cloud" className="cloud3 outframe" />
          </SkyZone>
     
          <BackgroundScene2 />
     
          <img src={House2} alt="House" className="House" />
     
          <Pig2>
              <img src={Saw} alt="Saw" className="saw" />
          </Pig2>
     
          <img src={wolf} alt="wolf" className="wolf" />
    
          <p> 
              <span>หมูตัวที่สอง</span>
              สร้างบ้านจากไม้เพราะมันง่ายและดูแข็งแรงดี
              พอหมูตัวแรกวิ่งมาถึงเจ้าหมาป่าก็วิ่งตามมาติดๆ
              ทั้งสองเลยวิ่งไปหลบในบ้านไม้ แต่ก็โดนเจ้าหมาป่าเป่าบ้านจนปลิวไปอยู่ดี
              ทั้งสองรีบหนีอีกครั้ง
              โดยครั้งนี้วิ่งไปที่บ้านเจ้าหมูตัวที่สาม
          </p>

      </Scene2>
  );
}
