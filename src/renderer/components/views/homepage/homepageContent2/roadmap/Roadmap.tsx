import React from 'react';
import "./index.scss";
import RoadmapList from "./roadmapList/RoadmapList";

import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
// import banana from "../../../../../../assets/images/pictures/backgrounds/banana.svg";

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <h1>Utility & Roadmap</h1>
          <p>
            Minting a Degenerate Ape acts as your enrollment to the most
            prestigious Academy apes have ever built. While you’re a student,
            you will have access to all that the academy has to offer currently,
            and in the future.
          </p>
          <p>
            Access to the academy means more than just bragging rights to those
            uneducated, less sophisticated apes. We have made it our goal to
            make sure utility is always offered to all our students. This
            utility will be modest at first but will expand over time as we
            continue to build.
          </p>
          <p>
            We are building the academy not just for you, but also with you.
            Listed below is our roadmap for the near and distant future.
          </p>
          <p>We hope you have your crayons ready.</p>
        </div>
        <Banana id="banana" />
        {/* <img src={banana} alt="logo"/> */}

      </div>
      <RoadmapList />
    </>
  );
}
