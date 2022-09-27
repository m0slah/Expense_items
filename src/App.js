import {React , useState} from "react";
import "./App.css";
import Expenses from "../src/Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 782,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 222,
      date: new Date(2020, 4, 3),
    },
    {
      id: "e3",
      title: "Some book",
      amount: 21,
      date: new Date(2021, 5, 22),
    },
    {
      id: "e4",
      title: "T Shirt",
      amount: 30,
      date: new Date(2020, 6, 17),
    },
  ];


  const App = () => {
const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

const addExpenseHandler=(expense)=>{

setExpenses((prevExpenses)=>{
  return[expense,...prevExpenses]
});

}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
