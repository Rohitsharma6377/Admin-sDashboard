import React from "react";
import state from "../Statistics/state.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../data";
import Chartx from "../chart/Chartx";
const Statistics = () => {
  return (
    <div className={`${state.container} theme-container`}>
      <span className={state.title}>Overview Statistics</span>
      <div className={`${state.cards} grey-container`}>
        <div className={state.cards}>
        <div>
          <div className={state.arrowicon}>
            <BsArrowUpShort />
          </div>
          <div className={state.card}>
            <span>Top item in this Month </span>
            <span>Office comps</span>
          </div>
        </div>
        <div className={state.card}>
          <span>Items</span><span>${groupNumber(100)}</span>
        </div>
        <div className={state.card}>
          <span>Profit</span><span>${groupNumber(37000)}</span>
        </div>
        <div className={state.card}>
          <span>Daily Average</span><span>${groupNumber(2000)}</span>
        </div>
        </div>
      </div>
      <Chartx/>
    </div>
  );
};

export default Statistics;
