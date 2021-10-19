import React from 'react';
import "./index.scss";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
/*eslint-disable react-hooks/exhaustive-deps */

import ApeintoshImg from "../../../../assets/images/pictures/backgrounds/pc-off.png";

import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";
import Homeback from '../../../../assets/images/pictures/backgrounds/home-back.png';
import Discord from '../../../../assets/images/pictures/social/discord.png';
import Twitter from '../../../../assets/images/pictures/social/twitter.png';

import Image1 from '../../../../assets/images/tokens/1.jpg'
import Image2 from '../../../../assets/images/tokens/2.jpg'
import Image3 from '../../../../assets/images/tokens/3.jpg'
import Image4 from '../../../../assets/images/tokens/4.jpg'
import Image5 from '../../../../assets/images/tokens/5.jpg'
import Image6 from '../../../../assets/images/tokens/6.jpg'
import Image7 from '../../../../assets/images/tokens/7.jpg'
import Image8 from '../../../../assets/images/tokens/8.jpg'
import { AddShoppingCart } from '@material-ui/icons';


export default function Apeintosh(): JSX.Element {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [timer, setTimer] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true)

  const [status, setStatus] = useState('start');

  
  // const [config, setConfig] = useState(config.gentle);
  const configs = config.gentle;

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={Image7} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={Image8} alt="8" />
    }
  ];
  const apeintoshImg = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "0px",
    height: "0px",
  });

  const [{ wallet, screenLoading: loading }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  const handleResize = () => {
    if (apeintoshImg && apeintoshImg.current) {
      setSize({
        height: `${apeintoshImg.current.clientHeight}px`,
        width: `${apeintoshImg.current.clientWidth}px`,
      });
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });

  useEffect(() => {
    // setInterval(function() {console.log("object")}, 3000);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGoToSlide(goToSlide + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useDidUpdateEffect(() => {
    if (wallet) {
      wallet!.on("connect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: true,
          },
        });
      });
      wallet!.on("disconnect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: false,
          },
        });
      });

      wallet!.connect();
      return () => {
        wallet!.disconnect();
      };
    }
  }, [wallet]);

  useDidUpdateEffect(() => {
    handleResize();
  }, [loading]);

  return (
    <div
      className="apeintosh"
      style={{
        minHeight: '630px'
      }}
    >
      {/* {setInterval(function() {console.log("object")}, 3000)} */}
      {console.log("Hello")}
      <div className="homepages" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <div style={{ width: "50%", height: "400px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    showNavigation={showArrows}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  <div
                    onClick={() => {
                      setGoToSlide(goToSlide - 1);
                    }}
                  >
                    ←
                  </div>
                  <p>Mutant Ether Babies Collection</p>
                  <div
                    onClick={() => {
                      setGoToSlide(goToSlide + 1);
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-titles">
          <div className="children-home-title">
            <div className="firstline">MUTANT ETHER</div>
            <div className="secondline">BABIES NFT</div>
            <div>{timer}</div>
            <div className="description">10,000 Out MUTANT ETHER BABIES are on the run on Ethereum Chain.. </div>
            <div className="social-links">
              <a href="#" className="">
                <div className="parent-icons">
                  <img src={Discord} alt="discord" className="" />
                </div>
              </a>
              <a href="#" className="">
                <div className="parent-icons">
                  <img src={Twitter} alt="twitter" className="" />
                </div>
              </a>
            </div>
            <div className="timewrap">
              <div className="count-down">
                <ul>
                  <li className="first">
                    <span className="days">00</span><br /><span className="date-time">DAYS</span>
                  </li>
                  <li className="second">
                    <span className="hours">00</span><br /><span className="date-time">HOURS</span>
                  </li>
                  <li className="third">
                    <span className="minutes">00</span><br /><span className="date-time">MINUTES</span>
                  </li>
                  <li className="forth">
                    <span className="seconds">00</span><br /><span className="date-time">SECONDS</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="forthline">NFT collection Game - Metaverse</div>
            <button className="get-llamanow btn-custom-button">Mint Your Mebs</button>
            <div className="stages">
              <span className="sale-status">Epoch1: SOLD OUT</span>&nbsp;&nbsp;
              <span className="status">Epoch2: AVAIABLE</span>
            </div>
          </div>
        </div>
      </div>
      {/* {isMobile ? <ScrollMobile /> : <ScrollWeb />} */}
    </div>
  );
}
