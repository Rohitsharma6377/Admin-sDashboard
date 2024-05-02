import React from "react";
import card from "../Card/card.module.css";


const Cards = () => {
 
  return (
    <div className={card.contain}>
      <div className={`${card.Cards} theme-container`}>
        <div className={`${card.cardhead} grey-container`}>
       <span  className={card.spn}>Todo List </span>
        </div>
       



      </div>
      <div className={`${card.Cards} theme-container`}>
        <div className={`${card.cardhead} grey-container`}>
        <span  className={card.spn}>Done </span>




        </div>
      </div>
      <div className={`${card.Cards} theme-container`}>
        <div className={`${card.cardhead} grey-container`}>
        <span  className={card.spn}>Meetings </span>



        </div>
      </div>
    </div>
  );
};

export default Cards;
