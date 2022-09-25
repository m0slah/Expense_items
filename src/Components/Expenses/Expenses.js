import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses=(props)=> {
const [filteredYear,setFilteredYear]=useState('2020')


const filterChangeHandler=(selectYear)=>{
  setFilteredYear(selectYear);  
}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
}

export default Expenses;
