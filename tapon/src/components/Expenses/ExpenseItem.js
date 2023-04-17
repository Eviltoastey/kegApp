import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
`;

const ExpenseItem = (props) => {
  return (
    <div className="container text-center text-muted container">
        <Card>
            <div className="col-3">
                {props.title}
            </div>
            <div className="col-3">
                {props.amount}
            </div>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="col-3">
                <Button value={props.id} className='btn btn-danger' onClick={((e) => props.handleOnDelete(e, props))}>Delete</Button>
            </div>
        </Card>
    </div>
  );
}

export default ExpenseItem;
