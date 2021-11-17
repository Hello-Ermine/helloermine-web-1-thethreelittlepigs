import logoproject from "./b/Logoproject.png";
import pig1 from "./b/Pigscene1.png";
import pig2 from "./b/Pigscene2.png";
import pig3 from "./b/Pigscene3.png";
import wolf0 from "./b/wolf.png";
import grass from "./b/Grass.png";

import cloudLeftLow from "./img/Cloud.png";
import cloudLeftHigh from "./img/Cloud2.png";
import cloudRight from "./img/CloudRight.png";
import cloudnsun from "./img/CloudnSun.png";
import CloudTransition from "./CloudTransition";


import { Navbar, Container } from "react-bootstrap"
import './firstpage.css'
import styled from 'styled-components';

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

export default function Firstpage() {

  return (
    <div className="ccc" id="home">
      <div>
        <Navbar bg="light" expand="lg" className="Nav" fixed="top">
          <Container fluid>
            <div>
              <Navbar.Brand href="#home">
                <img
                  src={logoproject}
                  width="200px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </div>

            <div className="cat">
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Navbar.Brand href="#story">Story</Navbar.Brand>
              <Navbar.Brand href="#ideas">Ideas</Navbar.Brand>
              <Navbar.Brand href="#about_us">About us</Navbar.Brand>
            </div>
          </Container>
        </Navbar>
        <img src={cloudnsun} alt="cloud" className="cloudnsun" />
        <Clouds>
          <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow" />
          <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh" />
          <img src={cloudRight} alt="cloud" className="cloudRight" />
          <img src={cloudLeftLow} alt="cloud" className="cloudLeftLow outframe" />
          <img src={cloudLeftHigh} alt="cloud" className="cloudLeftHigh outframe" />
          <img src={cloudRight} alt="cloud" className="cloudRight outframe" />
        </Clouds>

        <div className="khao">
          <h1 className="head1">AESOP'S</h1>
          <h1 className="head2">FABLES</h1>
          <p className="ppp">THE THREE LITTLE PIGS</p>
        </div>
      </div>


      <div className="ab">
        <img className="wolf0" src={wolf0} alt="" />

        <img className="grass" src={grass} alt="" />

        <img className="pig1" src={pig1} alt="" />

        <img className="pig2" src={pig2} alt="" />

        <img className="pig3" src={pig3} alt="" />


      </div>

      <CloudTransition />

    </div>
  )

}
