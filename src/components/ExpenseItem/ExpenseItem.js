import React, {useState} from "react";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import Card from '../Card/Card';
import ExpenseList from './ExpenseList';
import ExpensesChart from '../Chart/ExpensesChart'

const ExpenseItem = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')
     

    const filteredYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    

    return(
        <Card className='expense-wrap'>
     <ExpenseFilter selected={filteredYear} onChangeFilter={filteredYearHandler} />
     <ExpensesChart expenses={filteredExpenses}/>
     <ExpenseList item={filteredExpenses}/>
         </Card>
      ) 
}

export default ExpenseItem;