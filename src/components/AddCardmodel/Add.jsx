import React, { useState } from "react";
import add from "../AddCardmodel/add.module.css";
import "rodal/lib/rodal.css";
import Rodal from "rodal";
const Add = ({ visible, onClose }) => {
  const customStyle = {
    background: "rgba(58 58 58)",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [titel, setTitel] = useState("");
  const [data, setData] = useState("");
  return (
    <Rodal customStyles={customStyle} visible={visible} onClose={onClose}>
      <div className={add.container}>
        <div>
          <span className={add.label}>Card Titel</span>
          <input type="text" className={add.input} value={titel} onChange={(event)=>setTitel(event.target.value)}/>
        </div>
        <div>
            <span className={add.label} >Details</span>
            <textArea rows={10}  className={add.input} value={data} type="text" onChange={(event)=>setData(event.target.value)}/>
        </div>
         <button disabled={titel==="" && data===""} 
        className={add.save}
        onClick={()=>{
           
            setData("")
            setTitel("")
        }}
        >Add</button>
      </div>
    </Rodal>
  );
};
export default Add;
