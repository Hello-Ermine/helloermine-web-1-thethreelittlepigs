import "./App.css";
import nt from './img/member/Nt.jpg';
import geaw from './img/member/Geaw.jpg';
import jerome from './img/member/Jerome.jpg'
import benz from './img/member/Benz.jpg'
import nine from './img/member/Nine.jpg'
import F from './img/member/F.jpg'

function Member(props) {
    return (<div className='member'>
      <img src={props.imgSrc} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.duty}</p>
    </div>
    );
  }  

export default function FooterComponent() {
    return <div className="FooterComponent">
        <h1>Members</h1>
        <div className='members'>
            <Member name="Nt" duty="WEB DESIGN" imgSrc={nt} />
            <Member name="Geaw" duty="WEB DESIGN" imgSrc={geaw} />
            <Member name="Jerome" duty="FRONT-END" imgSrc={jerome} />
            <Member name="Benz" duty="FRONT-END" imgSrc={benz} />
            <Member name="Nine" duty="FRONT-END" imgSrc={nine} />
            <Member name="F" duty="INFRASTRUCTURE" imgSrc={F} />
        </div>
    </div>
}
