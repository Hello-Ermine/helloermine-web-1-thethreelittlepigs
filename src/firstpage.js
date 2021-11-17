import logoproject from "./b/Logoproject.png";
import pig1 from "./b/Pigscene1.png";
import pig2 from "./b/Pigscene2.png";
import pig3 from "./b/Pigscene3.png";
import wolf from "./b/wolf.png";
import grass from "./b/Grass.png";
import cloudleft from "./b/CloudLeft.png";
import cloudright from "./b/CloudRight.png";
import cloudsun from "./b/CloudnSun.png";
import {Navbar, Container , NavDropdown, Nav} from "react-bootstrap"
import './firstpage.css'
import styled from 'styled-components';
export default function Firstpage(){
    return(
        <div className="ccc">
        <div>
            <Navbar bg="light" expand="lg">
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
    <Navbar.Brand href="#home">Story</Navbar.Brand>
    <Navbar.Brand href="#home">Ideas</Navbar.Brand>
    <Navbar.Brand href="#home">About us</Navbar.Brand>
    </div>
  </Container>
</Navbar>
<div className="khao">
<h1 className="head1">AESOP'S</h1>
<h1 className="head2">FABLES</h1>
<p className="ppp">THE THREE LITTLE PIGS</p>
</div>
</div>



<div className="ab">
<img className="cloudleft"  src={cloudleft}/>
<img className="cloudright" src={cloudright}/>
<img className="cloudsun" src={cloudsun}/>

<img className="wolf" src={wolf}/>

<img className="grass" src={grass}/>

<img className="pig1" src={pig1}/>

<img className="pig2" src={pig2}/>

<img className="pig3" src={pig3}/>


</div>



</div>
    )

}