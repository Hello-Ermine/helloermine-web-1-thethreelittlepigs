/*

Scene1

หมูสามตัว
ถึงเวลาต้องออกจากบ้านไปสร้างบ้านของตัวเองแล้ว
หมูตัวแรกแสนขี้เกียจเลือกเอาฟางมาสร้างเพราะมันง่ายที่สุด
แต่พอเจ้าหมาป่ามาก็เป่าลมใส่บ้านเจ้าหมูตัวแรกพังหมดเพราะฟางมันเบา
เจ้าหมูจึงวิ่งสุดชีวิตไปหาหมูตัวที่สองเพราะเดี๋ยวจะโดนจับกินซะก่อน

framing 13/11/21
animation 15/11/21
*/

//photo PATH
import BGS1 from "./img/Sc1/BgScene1.png";
import BGCrop from "./img/Sc1/BgScene1_crop.png";
import cloud1 from "./img/Sc1/Cloud.png";
import cloud3 from "./img/Sc1/Cloud3.png";
import cloud4 from "./img/Sc1/Cloud2.png";
import PigS1 from "./img/Sc1/PigScene1.png";
import wolf from "./img/Sc1/wolf.png";
import House1 from "./img/Sc1/บ้านฟาง.png";
import Hammer from "./img/Sc1/HammerScene1.png";

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

  & .cloud4 {
    top: 100px;
    left: -80px;
    width: 200px;
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

  & .cloud4.outframe {
    top: 80px;
    left: 120vw;
    width: 200px;
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
const Scene1 = styled.div`
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
            width: 250px;
            z-index: 10;
        }
      
        & .wolf{
            left: 42%;
            top: 570px;
            position: absolute;
            width: 120px;
            animation: wolfSlideShow 10s linear infinite;
        }

        & p{
            position: absolute;
            left 65%;
            top: 150px;
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

        @keyframes wolfSlideShow {
            0% {
                left: 35%;
            }
            30% {
                left: 42%;
            }
            40% {
                left: 42%;
            }
            50% {
                left: 42%;
            }
            60% {
                left: 42%;
            }
            70% {
                left: 42%;
            }
            100% {
                left: 35%;
            }
        }
`;

//scene background
const BackgroundScene1 = styled.div`
  width: 100%;
  height: 990px;
  position: absolute;
  background-image: url(${BGS1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

//pig&tool + animation
const Pig1 = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${PigS1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  bottom: 150px;
  left: 200px;
  position: absolute;
  z-index: 10;

  & .hammer {
    position: absolute;
    top: 110px;
    right: 90px;
    width: 50px;
    animation: hammerSwing 3s infinite ease-in-out;
  }

  @keyframes hammerSwing {
    0% {
      transform: rotate(0deg) scaleX(-1);
    }
    50% {
      transform: rotate(10deg) scaleX(-1);
    }
    100% {
      transform: rotate(0deg) scaleX(-1);
    }
  }
`;

//export scene1
export default function FrameScene1() {
  return (
    <Scene1>
      <SkyZone>
        <img src={cloud4} alt="cloud" className="cloud4" />
        <img src={cloud1} alt="cloud" className="cloud1" />
        <img src={cloud3} alt="cloud" className="cloud3" />
        <img src={cloud4} alt="cloud" className="cloud4 outframe" />
        <img src={cloud1} alt="cloud" className="cloud1 outframe" />
        <img src={cloud3} alt="cloud" className="cloud3 outframe" />
      </SkyZone>
      <BackgroundScene1 />
      <img src={House1} alt="House" className="House" />
      <Pig1>
        <img src={Hammer} alt="hammer" className="hammer" />
      </Pig1>
      <img src={wolf} alt="wolf" className="wolf" />
      <p>
        <span> หมูสามตัว</span>
        ถึงเวลาต้องออกจากบ้านไปสร้างบ้านของตัวเองแล้ว
        หมูตัวแรกแสนขี้เกียจเลือกเอาฟางมาสร้างเพราะมันง่ายที่สุด
        แต่พอเจ้าหมาป่ามาก็เป่าลมใส่บ้านเจ้าหมูตัวแรกพังหมดเพราะฟางมันเบา
        เจ้าหมูจึงวิ่งสุดชีวิตไปหาหมูตัวที่สองเพราะเดี๋ยวจะโดนจับกินซะก่อน
      </p>
    </Scene1>
  );
}
