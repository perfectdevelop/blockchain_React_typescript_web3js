import React from 'react';
import "./index.scss";
import MonoApe from "../../../../../../assets/images/pictures/team/1.jpg";
import OboApe from "../../../../../../assets/images/pictures/team/2.jpg";
import ConorApe from "../../../../../../assets/images/pictures/team/3.jpg";

import TeamMember from "./teamMember/TeamMember";

export default function Team(): JSX.Element {
  return (
    <div id="team" className="hp-team">
      <p className="team">THE TEAM</p>
      <div className="hp-team-list">
        <TeamMember ape={MonoApe} name="Tony" role="Art & Design" description="The founder, also in charge of the community building and marketing. A true believer of the community-based decentralization approach and believe in cryptocurrency since 2017."/>
        <TeamMember ape={OboApe} name="Danny" role="Project Management" description="Experienced Developer in blockchain and game development, majored in computer science and has knowledge on BSC, ETH and SOL projects."/>
        <TeamMember ape={ConorApe} name="ConorHolds" role="Developer" description="Specialized in digital graphic design, worked on multiple NFT projects and is great on digital arts."/>
      </div>
    </div>
  );
}
