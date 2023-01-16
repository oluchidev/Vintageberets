import React, {useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';

const DUMMY_EXPENSES = [
  {
    id:121,
    date: new Date(2022, 2, 28),
    title: 'Car Installation',
    price: 230
  },
  {
    id:122,
    date: new Date(2023, 2, 28),
    title: 'Car Installation',
    price: 230
  },

  {
    id:123,
    date: new Date(2022, 2, 28),
    title: 'Car Installation',
    price: 230
  },

  {
    id:124,
    date: new Date(2022, 2, 10),
    title: 'Car Installation',
    price: 230
  },
]


const App =  () => {

  const [Expenses, setExpenses] = useState(DUMMY_EXPENSES);

const passedDataHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  } )
}




return(
  <div>
    <NewExpense onPassedData={passedDataHandler}/>
    <ExpenseItem item={Expenses}/>
  </div>
)
  

  } 
    
  

export default App;
