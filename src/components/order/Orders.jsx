import React from "react";
import order from "../order/order.module.css";
import hero1 from "/Users/THE-HELL-LORD/Desktop/Dashboard/src/assets/hero1.jpg";
import OrdersPiechart from '../orderpie/OrdersPiechart'
import { groupNumber, ordersData } from "../../data";
const Orders = () => {
  return (
    <div className={`${order.container} theme-container`}>
      <div className={order.head}>
        <img src={hero1} alt="logo png" />
        <span>Orders Today</span>
      </div>
      <div className={`${order.stat} grey-container`}>
        <span>Amount</span>
        <span>${groupNumber(4300)}</span>
      </div>
      <div className={order.orders}>
        {ordersData.map((order, index) => {
          return (
            <div key={index} className={order.ord}>
              <div>
                <span>{order.name}</span>
                <span>{order.change}</span>
              </div>
              <div>
                <span>{order.type}</span>
                <span>items:
                {order.items}

                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={order.orderchart}>
   <span>Split by orders</span>
  <OrdersPiechart/>
      </div>
    </div>
  );
};

export default Orders;
