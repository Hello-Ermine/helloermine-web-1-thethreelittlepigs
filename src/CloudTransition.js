import cloudLight from "./img/Cloud.png";
import cloudHard from "./img/Cloud2.png";
import cloudMedium from "./img/Cloud3.png";
import styled from "styled-components";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CloudComponent = styled.div`
        position: relative;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        z-index: 10000;

        & .clouds{
            width: 100%;
            height: 100vh;
            position:relative;
            z-index: 20;
        }

        & .cloud{
            position: absolute;
            transition: 3s ease-in-out;
            transition-delay: 500ms;
        }

        & .aos-animate .cloud.left{
            left: -120vh !important;
        }

        & .aos-animate .cloud.right{
            right: -100vh !important;
        }

        & .cloud.right{
            transform: scaleX(-1);
        }

        & .cloud.c1{
            height: 60vh;
            left: 100px;
        }

        & .cloud.c2{
            height: 50vh;
            top: 100px;
            left: -100px;
        }

        & .cloud.c3{
            height: 40vh;
            top: 300px;
            left: 150px;
        }

        & .cloud.c4{
            height: 40vh;
            top: 300px;
            right: 100px;
        }
        & .cloud.c5{
            height: 50vh;
            top: 100px;
            right: 100px;
        }
        & .cloud.c6{
            height: 40vh;
            top: 0px;
            right: -100px;
        }
`

export default function CloudTransition() {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);
    return (
        <CloudComponent >
            <div className="clouds" data-aos="">
                <img src={cloudLight} alt="cloud" className="cloud light left c1" />
                <img src={cloudMedium} alt="cloud" className="cloud medium left c2" />
                <img src={cloudHard} alt="cloud" className="cloud hard left c3" />

                <img src={cloudMedium} alt="cloud" className="cloud medium right c6" />
                <img src={cloudHard} alt="cloud" className="cloud hard right c5" />
                <img src={cloudLight} alt="cloud" className="cloud light right c4" />
            </div>
        </CloudComponent>
    )
}