import React, {useState} from "react";
import './NewExpenseForm.css';
import Card from '../Card/Card';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }

        props.onSaveData(expenseData);
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }


    return (
        <Card>
            <form onSubmit={onSubmitHandler} className="form-input">
                <div className="text-input">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler }/>
                </div>

                <div className="number-input">
                <label>Price</label>
                <input type='number' value={enteredPrice} onChange={priceChangeHandler} min='0.01' step='0.01'/>

                </div>

                <div className="date-input">
                <label>date</label>
                <input type='date' value={enteredDate} min={'2019-01-01'} max={'2023-31-12'} onChange={dateChangeHandler}/>

                </div>

                <div className="form-controls">
                    <button>Add item</button>
                </div>
            </form>
        </Card>
    )
}

export default NewExpenseForm;