import React from 'react';
import './Expense.css';
import Card from '../Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const Expense = (props) => {


    return (
        <li>
            <Card className='exp-container'>
                <ExpenseDate date={props.date} />
                <div className='exp-title-price'>
                    <h2>{props.title}</h2>
                    <div className='price_prop'>{props.price}</div>
                </div>
            </Card>
        </li>

    )
}

export default Expense;