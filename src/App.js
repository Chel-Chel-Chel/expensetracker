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

  const handleSubmit = (newExpense) => {
    setSubmitted(true);
    setData([newExpense, ...data]);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div
      className={`${styles.container} ${
        submitted ? `${styles.submitted}` : ""
      }`}
    >
      <Card>
        <Form submitForm={handleSubmit} />
        <List data={data} />
        <div>{submitted ? "submitted" : "not"}</div>
      </Card>
    </div>
  );
}

export default App;
