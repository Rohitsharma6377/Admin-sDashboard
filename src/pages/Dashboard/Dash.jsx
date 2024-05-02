import React from "react";
import dash from "../Dashboard/dash.module.css";
import { groupNumber, cardsData } from "../../data";
import Statistics from "../../components/Statistics/Statistics";
import Orders from "../../components/order/Orders";
const Dash = () => {
  return (
    <div className={dash.container}>
      {/*left side */}
      <div className={dash.dashboard}>
        <div
          className={`${dash.dashboardhead} 
theme-container`}
        >
          <div className={dash.head}>
            <span>Dashboard</span>
            <div className={dash.durationbtn}>
              <select >
                <option value="">1 Week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>
            <div className={dash.cards}>
              {cardsData && cardsData.map((card, index) => {
               return (
                
                <div className={dash.card}>
                  <div className={dash.cardhead}>
                    <span>{card.title}</span>
                    <span>{card.change}</span>
                  </div>
                  <div className={dash.cardamount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
               )
              })}
            </div>
        </div>
        <Statistics/>
      </div>
       <div className={dash.orderc}>
       <Orders/>
       </div>
    </div>
  );
};

export default Dash;
