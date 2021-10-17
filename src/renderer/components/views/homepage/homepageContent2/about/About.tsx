import React from 'react';
import "./index.scss";

import AboutCarrousel from "./aboutCarrousel/AboutCarrousel";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as Ape } from "../../../../../../assets/images/pictures/backgrounds/ape-headmaster2.svg";
import { ReactComponent as Cap } from "../../../../../../assets/images/pictures/icons/Cap2.svg";

// import ape from "../../../../../../assets/images/pictures/backgrounds/ape-headmaster2.svg";
// import cap from "../../../../../../assets/images/pictures/icons/Cap2.svg";
import ape from "../../../../../../assets/images/pictures/backgrounds/ape-headmaster2.png";

export default function About(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <>
      <div id="about" className="hp-about" data-aos="fade-up">
        <img src={ape} alt="logo"/>
        {/* {isMobile ? <Cap /> : <Ape />} */}
        {
          // isMobile ? <img src={cap} alt="logo"/> : <img src={ape} alt="logo"/>
        }
        <div className="hp-a-content">
          <h1>Welcome to the academy</h1>
          <p>
            Our mission here at the academy is simple: Take 10,000 of the
            smoothest brained apes, put them all in one location and let the
            mayhem ensue.
          </p>
          <p>
            The academy was founded on the principles of friendship making,
            crayon eating and absolute, unregulated, deplorable, degenerate
            behaviour. Welcome fellow apes, to the Degenerate Ape Academy.
          </p>
          <h1>Enrollment Fee: 6◎</h1>
          <p>Maximum student number: 10,000</p>
        </div>
      </div>
      <AboutCarrousel />
    </>
  );
}
