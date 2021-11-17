
import mascot from "./img/MascotProject.png";
import textbox from "./img/textbox.png";
import grass1 from "./img/grass1.png";
import grass2 from "./img/grass2.png";
import cloudLeftLow from "./img/Cloud.png";
import cloudLeftHigh from "./img/Cloud2.png";
import cloudRight from "./img/CloudRight.png";

import CloudTransition from "./CloudTransition";

import styled from "styled-components";

const Textbox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%,-350px);
    width: 900px;
    margin: 0;
    height: 500px;
    background-image: url(${textbox});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    animation: floating infinite 3s ease-in-out;

    & * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

    & .mascot{
        top: 120px;
        left: -120px;
    }

    @keyframes floating {
        0%   {transform: translate(-40%,-250px);}
        50%  {transform: translate(-40%,-265px);}
        100% {transform: translate(-40%,-250px);}
    }
`

const Content = styled.div`
        width: 300px;
        height: 180px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        & >*{
        font-family: 'Mitr', sans-serif;
        }
        
        & h1{
            color: #FFA31F;
            font-size: 2.5em;
        }

        & p{
            font-size: 1.2em;
            color: rgb(100,100,100);
    }
`

const Ideas = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    background-color: #F0F9FF;
    overflow: hidden;

    & .mascot {
        position: absolute;
        width: 500px;
}
`

const GrassGround = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, rgba(143, 185, 34, 0) 0%, rgba(143, 185, 34, 1) 30%);

    & > *{
        position: absolute;
        width: 70px;
        bottom: 195px;
    }

    & .grass2 {
        left: 100px;
    }

    & .grass3 {
        right: 100px;
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

        @keyframes cloudy {
            0%{left:0%;}
            100%{left:-128%;}
        }

        & .cloudLeftLow {
            top: 100px;
            left: -80px;
            width: 200px;
        }

        & .cloudLeftHigh {
            top: 300px;
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
            top: 300px;
            left: 124vw;
            width: 250px;
        }
        & .cloudRight.outframe {
            top: 10px;
            right: calc(-200px - 126vw);
        }

`

export default function IdeasComponent() {
    return (
        <Ideas id="ideas">
            <Textbox>
                <img src={mascot} alt="mascot" className="mascot" />
                <Content>
                    <h1>IDEAS</h1>
                    <p>เราควรนำข้อผิดพลาดมาเป็นบทเรียนและพัฒนาตัวเองให้ดียิ่งขึ้น และก่อนจะทำสิ่งใดควรไตร่ตรองให้
                        รอบคอบก่อนเสมอ</p>
                </Content>
            </Textbox>
            <CloudTransition/>
            <Clouds>
                <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow" />
                <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh" />
                <img src={cloudRight} alt="cloud" className="cloudRight" />
                <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow outframe" />
                <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh outframe" />
                <img src={cloudRight} alt="cloud" className="cloudRight outframe" />
            </Clouds>
            <GrassGround>
                <img src={grass1} alt="grass1" className="grass1" />
                <img src={grass2} alt="grass2" className="grass2" />
                <img src={grass2} alt="grass3" className="grass3" />
            </GrassGround>
        </Ideas>
        )
}