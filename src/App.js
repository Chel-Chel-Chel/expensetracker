import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

import styles from "./App.module.scss";
import List from "./components/List/List";

const initialData = [
  { expense: "pen", amount: 200, id: uuidv4() },
  { expense: "car", amount: 2200, id: uuidv4() },
];

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(initialData);
  const [listStyle, setListStyle] = useState(false);

  const handleSubmit = (newExpense) => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setData([newExpense, ...data]);
    }, 1000);
  };

  const clearItems = () => {
    setListStyle(true);

    setTimeout(() => {
      setListStyle(false);
      setData([]);
    }, 500);
  };

  const handleDelete = (id) => {
    let tempExpenses = data.filter((item) => item.id !== id);
    setData(tempExpenses);
  };

  return (
    <div
      className={`${styles.container} ${
        submitted ? `${styles.submitted}` : ""
      }`}
    >
      <Card>
        <div
          className={`${styles.basicStyle} ${
            listStyle ? `${styles.listStyle}` : ""
          }`}
        ></div>
        <Form submitForm={handleSubmit} />
        <List data={data} clearItems={clearItems} handleDelete={handleDelete} />
      </Card>
    </div>
  );
}

export default App;
