import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({uid, price}) =>{
  console.log("Received Price:", price);
  const generalContext = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(price);

    const handleSellClick = async ()=>{
      try{
        console.log("Sell button clicked");
        console.log("UID =", uid);
     if(uid){
     const response = await axios.post("https://zerodha-clone-wz77.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
     });
     console.log("Server Response:", response.data);
    }
      }catch(err){
     console.error("Error occurred while handling sell click:", err);
   }
   generalContext.closeSellWindow();
   window.location.reload();
    };


     const handleCancleClick = ()=>{
     generalContext.closeSellWindow();
   };

   return(
   <div className="container" id="buy-window" draggable="true">
         <div className="regular-order">
           <div className="inputs">
             <fieldset>
               <legend>Qty.</legend>
               <input
                 type="number"
                 name="qty"
                 id="qty"
                 onChange={(e) => setStockQuantity(e.target.value)}
                 value={stockQuantity}
               />
             </fieldset>
             <fieldset>
               <legend>Price</legend>
               <input
                 type="number"
                 name="price"
                 id="price"
                 step="0.05"
                 onChange={(e) => setStockPrice(e.target.value)}
                 value={stockPrice}
               />
             </fieldset>
           </div>
         </div>
   
         <div className="buttons">
           <span>Margin required ₹140.65</span>
           <div>
             <Link className="btn btn-red" onClick={handleSellClick}>
               Sell
             </Link>
             <Link to="" className="btn btn-grey" onClick={handleCancleClick}>
               Cancel
             </Link>
           </div>
         </div>
       </div>
   );
};

export default SellActionWindow;