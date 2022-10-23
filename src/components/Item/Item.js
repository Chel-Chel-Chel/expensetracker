import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.expense}</h2>
      <h3>{item.amount}</h3>
    </div>
  );
};

export default Item;
