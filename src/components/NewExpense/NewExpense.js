import React, {useState} from "react";
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveDataHandler = (expenseData) => {
        const ExpenseDataObject = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onPassedData(ExpenseDataObject)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }
        
        return(
            
            <div className="NewExp-container">
                {!isEditing &&  (
                    <div className='add-new-btn-cont'>
                    <button onClick={startEditingHandler} className='add-new-btn'>Add New Expense</button>
                    </div>
                )}
                {isEditing && (

    <NewExpenseForm onCancel={stopEditingHandler} onSaveData={onSaveDataHandler}/>
                )}
        </div>
    )
}

export default NewExpense;