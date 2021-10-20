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
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">0%</p>
              <p className="r-content">Before the release, we will pre-mint random 100 Bullish Llama NFTs for the team and promotion purposes, such as giveaways to grow our community.</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">30%</p>
              <p className="r-content">Launch of merch store exclusively for Bullish Llama NFT owners – show off your Bullish Llama to the world on snapbacks, t-shirts, hoodies, posters, and more</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">60%</p>
              <p className="r-content">Charity donation to World Wildlife Fund in the amount of 10% of minting sales</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">90%</p>
              <p className="r-content">Our club is more like a farm, where are not only Llamas and each animal have its own role. We will create a partner for our Bullish Llamas and you will choose which animal will be next.
                We will gift the other Bullish creature to 50% random minters.</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">100%</p>
              <p className="r-content">We all want to raise our own herds of Bullish farm creatures. Our mobile app will help you with that as well as with finding the right use case for each Bullish Llama skillset.</p>
            </div>
          </div>
         

            {/* <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="">Intel showing 10,000 MUTANT ETHER BABIES are on the run!!</p>
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
              <p className="">1 ETH giveaway for every 1000 MUTANT ETHER BABIES minted</p>
            </div>
          </div>
          <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="">10 MUTANT ETHER BABIES will be airdropped to the most active members in our community</p>
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
          </div> */}
       
          {/* <img src={banana} alt="logo"/> */}
        </div>
      </div>
      {/* <RoadmapList /> */}
    </>
  );
}
