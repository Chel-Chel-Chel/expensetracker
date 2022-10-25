import React from "react";
import Item from "../Item/Item";

import { MdDelete } from "react-icons/md";

import styles from "./List.module.scss";

const List = ({ data, clearItems, handleDelete, itemStyle }) => {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Your Expenses</h2>
      <section className={styles.list}>
        {data.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              handleDelete={handleDelete}
              itemStyle={itemStyle}
            />
          );
        })}
      </section>
      {data.length > 0 && (
        <>
          <button
            className={styles.btnDelete}
            onClick={clearItems}
            aria-label="clear all"
          >
            clear all <MdDelete className={styles.btnIcon} />
          </button>
          <h3 className={styles.totalSpending}>
            Total Spending :{" "}
            <span className={styles.totalValue}>
              {data.reduce((acc, curr) => {
                return (acc += +curr.amount);
              }, 0)}
              $
            </span>
          </h3>
        </>
      )}
    </main>
  );
};

export default List;
