import React from "react";
import "./friendcard.css";

const FriendCard = props => (
  <div className="container">
    <div className="row m-3">
      <div class="col-sm">
        <img
          className="card-img-top card"
          src={props.img}
          alt={props.name}
          onClick={props.guessed}
        />
      </div>
    </div>
  </div>
);

export default FriendCard;
