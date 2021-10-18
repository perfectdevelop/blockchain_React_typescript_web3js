import React from 'react';
import "./index.scss";
import RoadmapList from "./roadmapList/RoadmapList";

import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
// import banana from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
import Facebone from '../../../../../../assets/images/pictures/icons/facebone.png';

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <p className="road-map">ROADMAP</p>
          <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="">Intel showing 10,000 Outlawpunks are on the run!!</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <span>0%</span>
          </div>
          <div className="pawrap pawrap2">
            <span>10%</span>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
              <p className="">1 ETH giveaway for every 1000 Outlawpunk minted</p>
            </div>
          </div>
          <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="">10 Outlawpunk will be airdropped to the most active members in our community</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <span>25%</span>
          </div>
          <div className="pawrap pawrap2">
            <span>50%</span>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
              <p className="">Another big influencer will be onboard!</p>
            </div>
          </div>
          <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="">Donation to a charity based on community choice</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <span>75%</span>
          </div>
          <div className="pawrap pawrap2">
            <span>100%</span>
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
              <p className="">A lucky draw for a tesla car, a Rolex, and 3 ETH for 3 lucky communtity member</p>
            </div>
          </div>
        </div>
        {/* <img src={banana} alt="logo"/> */}

      </div>
      {/* <RoadmapList /> */}
    </>
  );
}
