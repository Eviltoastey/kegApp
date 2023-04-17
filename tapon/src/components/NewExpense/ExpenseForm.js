import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expanseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expanseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Amount</label>
        <input
          type="number"
          className="form-control"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="form-group mb-4">
        <label for="exampleInputPassword1">Date</label>
        <input
          type="date"
          min="2022-01-01"
          max="2025-01-01"
          className="form-control"
          value={userInput.enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
