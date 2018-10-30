import React from "react";
import './CandyList.css'
const CandyList = ({ candies }) => {
  return (
    <div>
      
      <div className="container">
        {candies.slice(0, 6).map(e => (
          <>
            <div className="item">
              {/* <div>{e.product_name}</div> */}
              {/* <div className="brands">{e.brands}</div> */}
              {e.image_thumb_url && <img className="bonbonimg" src={e.image_url} alt=""/>}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CandyList;