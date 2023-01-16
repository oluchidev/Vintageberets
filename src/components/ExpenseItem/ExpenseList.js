import React from "react";
import Expense from '../Expense/Expense';
import './ExpenseList.css';

const ExpenseList = (props) => {
 
    if (props.item.length === 0) {
        return <h2  className="expense-list-fallback">No Expenses found</h2>
    }

        return ( 
             <ul>
            {props.item.map((expense) =>

                <Expense
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                />
            )
            }
        </ul>
        )
}

export default ExpenseList;