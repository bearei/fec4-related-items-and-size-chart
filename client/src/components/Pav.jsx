import React from "react";

const Pav = ({ info }) => (
  <div className="pav-container">
    {info.map((y, key) => (
      <React.Fragment>
        <div className="pav-unit">
          <div>
            <img src={y.link_to_image} key={key} />
          </div>
          <div>
            <div>{y.star_rating}</div>
            <div>{y.review_count}</div>
          </div>
          <div>{y.short_description}</div>
          <div>${y.price}.00</div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default Pav;
