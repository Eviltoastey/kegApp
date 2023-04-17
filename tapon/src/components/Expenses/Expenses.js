import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css'

const Expenses = (props) => {

  const handleClick = (e, data) => {
    props.onDeleteExpense(data);
  };

  return (
   <div>
    {props.items.map(expense => <ExpenseItem handleOnDelete={handleClick} key={expense.id} id={expense.id} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>)}
   </div>
  );
}

export default Expenses;
