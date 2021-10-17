import React from 'react';
import "./index.scss";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
/*eslint-disable react-hooks/exhaustive-deps */

import ApeintoshImg from "../../../../assets/images/pictures/backgrounds/pc-off.png";

import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";
import Homeback from '../../../../assets/images/pictures/backgrounds/home-back.png';


export default function Apeintosh(): JSX.Element {
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
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

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
      <div className="homepages" style={{display: "flex"}}>
        <div className="home-titles">
          <div className="children-home-title">
            <div className="firstline">We are</div>
            <div className="secondline">Bullish.</div>
            <div className="thirdline">Are you?</div>
            <div className="forthline">NFT Collection & Mobile app</div>
            <button className="get-llamanow btn-custom-button">Get Llama Now</button>
            <div className="stages">
              <span className="sale-status">Epoch1: SOLD OUT</span>&nbsp;&nbsp;
              <span className="status">Epoch2: AVAIABLE</span>
            </div>
          </div>
        </div>
        <div className="home-image">
          {/* <img src={Homeback} alt="home-back" className="" style={{width: "85%", height: "auto"}} /> */}
        </div>
      </div>
      {/* {isMobile ? <ScrollMobile /> : <ScrollWeb />} */}
    </div>
  );
}
