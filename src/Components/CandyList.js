import React from "react";
import './CandyList.css'
const CandyList = ({ candies }) => {
  return (
    <div>
        <h3>Récompenses disponibles à cette adresse</h3>
        <div className="container">
      {candies.slice(0,5).map(e=>(
              <>
                    <div className="item"> {e.product_name}
                  <div>{e.brands}</div>
                  <div>{e.image_thumb_url && <img src={e.image_thumb_url} alt=""></img>}
                  </div>
                  </div>
              </>
      ))}
      </div>
    </div>
  );
};

export default CandyList;
