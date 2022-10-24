import React from "react";
import Item from "../Item/Item";

import styles from "./List.module.scss";

const List = ({ data }) => {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Your Expenses</h2>
      <section className={styles.list}>
        {data.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </section>
    </main>
  );
};

export default List;
