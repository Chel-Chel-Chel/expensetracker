import React from "react";
import Item from "../Item/Item";

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
