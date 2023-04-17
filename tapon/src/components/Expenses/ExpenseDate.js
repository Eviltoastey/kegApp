import React from 'react';
import './ExpenseItem.css'

const ExpenseDate = (props) => {
    const d =  props.date;
    const month = d.toLocaleString('en-US', {month: 'long'});
    const day = d.toLocaleString('en-US', {day: '2-digit'});
    const year = d.getFullYear();

  return (
    <div className="col-3">
        {month} {day} {year}
    </div>
  );
}

export default ExpenseDate;
