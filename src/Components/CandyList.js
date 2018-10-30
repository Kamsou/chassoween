import React from "react";
import './CandyList.css'
const CandyList = ({ candies }) => {
  return (
    <div>
      <h3>Récompenses disponibles à cette adresse</h3>
      <div className="container">
        {candies.slice(0, 6).map(e => (
          <>
            <div className="item">
              <div>{e.product_name}</div>
              <div className="brands">{e.brands}</div>
              {e.image_thumb_url && <img src={e.image_thumb_url} alt=""/>}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CandyList;