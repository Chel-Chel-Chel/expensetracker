import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { MdSend } from "react-icons/md";

import styles from "./Form.module.scss";

const Form = ({ submitForm }) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [inputColor, setInputColor] = useState(false);
  const [line, setLine] = useState(false);

  const handleExpense = (event) => {
    setExpense(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (expense !== "" && amount > 0) {
      const date = new Date();
      const expenseDate = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
      ];
      const [year, month, day, hours, minutes] = expenseDate;
      submitForm({
        expense: expense,
        amount: +amount,
        id: uuidv4(),
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
      });

      setLine(true);
      setTimeout(() => {
        setLine(false);
        setExpense("");
        setAmount("");
      }, 500);
    }
  };

  const handleMouseEnter = () => {
    setInputColor(true);
  };

  const handleMouseLeave = () => {
    setInputColor(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="expense..."
          onChange={handleExpense}
          value={expense}
          className={`${inputColor ? `${styles.colored}` : ""}`}
        />

        <input
          type="number"
          min={0}
          placeholder="amount($)..."
          onChange={handleAmount}
          value={amount}
          className={`${inputColor ? `${styles.colored}` : ""}`}
        />
      </div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.btn}
      >
        Submit <MdSend className={styles.btnIcon} />
      </button>
      <div
        className={`${styles.line} ${line ? `${styles.lineAnimation}` : ""}`}
      ></div>
    </form>
  );
};

export default Form;
