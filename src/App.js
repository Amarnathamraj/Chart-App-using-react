// Write your code at relevant places in the code below
import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const Dummy_Expenses = [
  { id: "e1", date: new Date(2024, 7, 15), title: "Insurance",amount: 100 },
  { id: "e2", date: new Date(2023, 3, 25), title: "Book", amount: 10 },
  { id: "e3", date: new Date(2024, 10, 11), title: "Pen", amount: 1 },
  { id: "e4", date: new Date(2022, 1, 14), title: "Laptop", amount: 200 },
];

const App=()=> {
 const [expenses,setExpenses]=useState(Dummy_Expenses);
const addExpenseHandler=(expense)=>{
setExpenses((prevExpenses) =>{
   return [expense, ...prevExpenses];

});
//const newExpenseYear = expense.date.getFullYear().toString();
  //  setFilteredYear(newExpenseYear);

};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses items={expenses}/>
    </div>
  );
  }

export default App;



