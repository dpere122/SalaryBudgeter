/* eslint-disable no-console */
import Button from "@restart/ui/esm/Button";
import { useState } from "react";
// import { Button } from "react-bootstrap";
import "./Budgeter.scss";

function Expense({ expense }) {
  return (
    <div className="row expense rounded">
      <div className="col">
        <p>{expense.name}</p>
      </div>
      <div className="col">
        <p>{expense.cost}</p>
      </div>
    </div>
  );
}

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cost);
    if (!name) return;
    addExpense(name, cost);
    setName("");
    setCost(0);
  };
  const textInput = {
    width: "10ch",
    borderRadius: "5px",
    margin: "2px",
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        style={textInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        style={textInput}
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <Button type="submit">ADD</Button>
    </form>
  );
}

function Budgeter() {
  const [salary, setSalary] = useState(0);

  // const [exp, setExp] = useState({name:"", cost:0});
  const [expenses, setExpenses] = useState([
    { name: "Food", cost: 100 },
    { name: "Entertainment", cost: 250 },
  ]);

  const handleChange = (e) => {
    setSalary(e.target.value);
  };
  const addExpense = (name, cost) => {
    const newExpense = [...expenses, { name, cost }];
    setExpenses(newExpense);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="box">
          <div className="row">
            <div className="col">
              <h3>Yearly Salary: </h3>
            </div>
            <div className="col">
              <input
                type="text"
                name="Salary"
                value={salary}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            {/* Total for comparison */}
            <div className="col">
              <h4>Total</h4>
              <p>Yearly Salary: {salary}</p>
              <p>Monthly Salary: {(salary / 12).toFixed(2)}</p>
              <p>Weekly Salary: {(salary / 52).toFixed(2)}</p>
            </div>
            {/* Expenses */}
            <div className="col">
              <h4>LeftOver</h4>
              <p>Yearly Salary: {salary}</p>
              <p>Monthly Salary: {(salary / 12).toFixed(2)}</p>
              <p>Weekly Salary: {(salary / 52).toFixed(2)}</p>
            </div>
          </div>
          <hr />
          <div>
            {expenses.map((expense, index) => (
              <Expense key={index} index={index} expense={expense} />
            ))}
          </div>
          <div className="row">
            <ExpenseForm addExpense={addExpense} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Budgeter;
