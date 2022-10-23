import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { MdSend } from "react-icons/md";

import styles from "./Form.module.scss";

const Form = ({ submitForm }) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const handleExpense = (event) => {
    setExpense(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (expense !== "" && amount > 0) {
      submitForm({ expense: expense, amount: +amount, id: uuidv4() });

      setExpense("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="expense..."
          onChange={handleExpense}
          value={expense}
        />

        <input
          type="number"
          min={0}
          placeholder="amount($)..."
          onChange={handleAmount}
          value={amount}
        />
      </div>
      <button>
        Submit <MdSend className={styles.btnIcon} />
      </button>
      <div className={styles.line}></div>
    </form>
  );
};

export default Form;
