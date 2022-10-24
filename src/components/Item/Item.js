import React from "react";

import styles from "./Item.module.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Item = ({ item }) => {
  return (
    <section className={styles.item}>
      <h2 className={styles.heading}>{item.expense}</h2>
      <h3 className={styles.amount}>
        {item.amount}
        <span className={styles.dollar}>$</span>
      </h3>
      <p className={styles.date}>
        Expense was created{" "}
        <span className={styles.important}>
          {months[item.month]} {item.day} {item.year}
        </span>{" "}
        <br />
        at{" "}
        <span className={styles.important}>
          {item.hours}:{item.minutes}
        </span>
        .
      </p>
    </section>
  );
};

export default Item;
