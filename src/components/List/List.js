import React from "react";
import Item from "../Item/Item";

import { MdDelete } from "react-icons/md";

import styles from "./List.module.scss";

const List = ({ data, clearItems }) => {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Your Expenses</h2>
      <section className={styles.list}>
        {data.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </section>
      {data.length > 0 && (
        <button className={styles.btnDelete} onClick={clearItems}>
          clear all <MdDelete className={styles.btnIcon} />
        </button>
      )}
    </main>
  );
};

export default List;
