import nt from './img/member/Nt.jpg';
import geaw from './img/member/Geaw.jpg';
import jerome from './img/member/Jerome.jpg'
import benz from './img/member/Benz.jpg'
import nine from './img/member/Nine.jpg'
import F from './img/member/F.jpg'
import GroundFooter from './img/GroundFooter.png'

import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Members = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      box-sizing: border-box;
`

const Person = styled.div`
      width: 120px;
      margin: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & >*{
        text-transform: uppercase;
        margin: .5em 0;
      }

      & p{
        color: white;
        font-weight: 400;
        text-shadow: 0 0 10px black;
      }

      & h2{
        font-weight: 800;
      }

      & img{
        width: 100%;
        height: 122px;
        object-fit: cover;
        border-radius: 100px;
        border: .5em solid #FFE7C3;
      }
`
const Footer = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url(${GroundFooter});
        padding: 5em 0;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;


        & h1 {
          margin: 1.5em 0 .5em 0;
          font-weight: 900;
          font-size: 3.5em;
          font-family: 'Mitr', sans-serif;
          color: #D2891B;
        }
`

const Pic = styled.div`
      width: 130px;
      height: 130px;
      border-radius: 100px;
      border: .5em solid #FFE7C3;
      background-image: url(${props => props.src});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;   
      transition: 300ms ease-in-out;
      overflow: hidden ;

      :hover{
        
        animation: floatingPic 1s ease-in-out infinite;
      }
      :active{
        transform: translateY(0);
        box-shadow: none;
      }

      @keyframes floatingPic{
        0%{transform:translateY(0px);}
        50%{transform:translateY(-5px);}
        100%{transform:translateY(0px);}
      }
`

function Member(props) {
  return (<Person>
    <a href={props.contact}>
      <Pic src={props.imgSrc} />
    </a>
    <h2>{props.name}</h2>
    <p>{props.duty}</p>
  </Person>
  );
}

export default function FooterComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <Footer id="about_us">
      <h1>Members</h1>
      <Members data-aos="fade-up">
        <Member name="Nt" duty="WEB DESIGN" imgSrc={nt} contact="https://www.instagram.com/pongsaparkk/" />
        <Member name="Geaw" duty="WEB DESIGN" imgSrc={geaw} contact="https://www.instagram.com/ggenaw/" />
        <Member name="Jerome" duty="FRONT-END" imgSrc={jerome} contact="https://www.instagram.com/lostjerome/" />
        <Member name="Benz" duty="FRONT-END" imgSrc={benz} contact="https://www.instagram.com/_13enz_/" />
        <Member name="Nine" duty="FRONT-END" imgSrc={nine} contact="https://instagram.com/9.righthere/" />
        <Member name="F" duty="INFRASTRUCTURE" imgSrc={F} contact="https://www.instagram.com/ratcha_f101/" />
      </Members>
    </Footer>
  )
}
