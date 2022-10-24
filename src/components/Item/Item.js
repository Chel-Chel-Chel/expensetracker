import React from "react";
import { MdSearch, MdDelete } from "react-icons/md";

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

const Item = ({ item, handleDelete }) => {
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
          {`${item.hours < 10 ? `0${item.hours}` : `${item.hours}`}`}:
          {`${item.minutes < 10 ? `0${item.minutes}` : `${item.minutes}`}`}
        </span>
        .
      </p>
      <button className={styles.btnItem}>
        <a
          href={`https://www.google.com/search?q=${item.expense}`}
          target="_blank"
          rel="noreferrer"
        >
          <MdSearch className={styles.icon} />
        </a>
      </button>
      <button className={styles.btnItem} onClick={() => handleDelete(item.id)}>
        <MdDelete className={styles.icon} />
      </button>
    </section>
  );
};

export default Item;
