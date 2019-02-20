import React from "react";

const Pav = ({ info }) => (
  <div className="pav-container">
    {info.map(y => (
      <React.Fragment>
        <div className="pav-unit">
          <div>
            <img src={y.link_to_image} key={y._id} />
          </div>
          <div>
            <div className="ratings">
              <div className="star-ratings-sprite">
                <div
                  style={{ width: `${y.star_rating}%` }}
                  className="star-ratings-sprite-rating"
                />
              </div>
              <div className="review-count" key={y._id}>
                ({y.review_count})
              </div>
            </div>
          </div>
          <div className="short-description" key={y._id}>
            {y.short_description}
          </div>
          <div className="price" key={y._id}>
            ${y.price}.00
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default Pav;
