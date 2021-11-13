import nt from './img/member/Nt.jpg';
import geaw from './img/member/Geaw.jpg';
import jerome from './img/member/Jerome.jpg'
import benz from './img/member/Benz.jpg'
import nine from './img/member/Nine.jpg'
import F from './img/member/F.jpg'
import GroundFooter from './img/GroundFooter.png'

import styled from "styled-components";


const Members = styled.div`
      position: absolute;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
`

const Person = styled.div`
      width: 120px;
      margin: 1em;
      transition: 300ms ease-in-out;

      :hover{
        transform: translateY(-5px);
      }

      & >*{
        text-transform: uppercase;
        margin: .5em 0;
      }

      & p{
        color: rgb(80, 80, 80);
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
        height: 500px;
        background-image: url(${GroundFooter});
        padding: 5em 0;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: auto;
        text-align: center;
        box-sizing: border-box;

        & h1 {
          margin: 1.5em 0 .5em 0;
        }
`
function Member(props) {
  return (<Person>
    <img src={props.imgSrc} alt={props.name} />
    <h2>{props.name}</h2>
    <p>{props.duty}</p>
  </Person>
  );
}

export default function FooterComponent() {
  return <Footer>
    <h1>Members</h1>
    <Members>
      <Member name="Nt" duty="WEB DESIGN" imgSrc={nt} />
      <Member name="Geaw" duty="WEB DESIGN" imgSrc={geaw} />
      <Member name="Jerome" duty="FRONT-END" imgSrc={jerome} />
      <Member name="Benz" duty="FRONT-END" imgSrc={benz} />
      <Member name="Nine" duty="FRONT-END" imgSrc={nine} />
      <Member name="F" duty="INFRASTRUCTURE" imgSrc={F} />
    </Members>
  </Footer>
}
