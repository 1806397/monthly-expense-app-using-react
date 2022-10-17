import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangerHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangerHandler}
        />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
