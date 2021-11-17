import logoproject from "./b/Logoproject.png";
import pig1 from "./b/Pigscene1.png";
import pig2 from "./b/Pigscene2.png";
import pig3 from "./b/Pigscene3.png";
import wolf from "./b/wolf.png";
import grass from "./b/Grass.png";
import cloudleft from "./b/CloudLeft.png";
import cloudright from "./b/CloudRight.png";
import cloudsun from "./b/CloudnSun.png";
import { Navbar, Container } from "react-bootstrap"
import './firstpage.css'
import styled from 'styled-components';

export default function Firstpage() {
  return (
    <div className="ccc">
      <div>
        <Navbar bg="light" expand="lg" className="Nav" fixed="top" variant="pills">
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

       
        <div className="khao">
          <h1 className="head1">AESOP'S</h1>
          <h1 className="head2">FABLES</h1>
          <p className="ppp">THE THREE LITTLE PIGS</p>
        </div>
      </div>



      <div className="ab" id="home">
        <img className="cloudleft" src={cloudleft} alt=""/>
        <img className="cloudright" src={cloudright} alt=""/>
        <img className="cloudsun" src={cloudsun} alt=""/>

        <img className="wolf" src={wolf} alt=""/>

        <img className="grass" src={grass} alt=""/>

        <img className="pig1" src={pig1} alt=""/>

        <img className="pig2" src={pig2} alt=""/>

        <img className="pig3" src={pig3} alt=""/>


      </div>



    </div>
  )

}
