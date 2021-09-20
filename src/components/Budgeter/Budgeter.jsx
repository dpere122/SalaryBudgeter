/* eslint-disable no-console */
import { useState } from "react";
import { Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import "./Budgeter.scss";

function Expense({ expense, index, removeExpense }) {
  return (
    <div className="row expense rounded">
      <div className="col-6">
        <p>{expense.name}</p>
      </div>
      <div className="col-3">
        <p>{expense.cost}</p>
      </div>
      <div className="col">
        <Button className="delete" onClick={() => removeExpense(index)}>
          <X size={25}></X>
        </Button>
      </div>
    </div>
  );
}

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addExpense(name, cost);
    setName("");
    setCost("");
  };
  const textInput = {
    width: "15ch",
    borderRadius: "5px",
    margin: "2px",
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <p className="m-0">Name</p>
          <input
            type="text"
            style={textInput}
            value={name}
            placeholder="Groceries"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <p className="m-0">Cost</p>
          <input
            type="text"
            style={textInput}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="col">
          <br />
          <Button type="submit">ADD</Button>
        </div>
      </div>
    </form>
  );
}

function Budgeter() {
  const [totalExpenses, setTotal] = useState(0);
  const [salary, setSalary] = useState(0);

  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    setSalary(e.target.value);
  };
  const addExpense = (name, cost) => {
    // validate for numbers only
    let nCost = parseFloat(cost);
    if (!isNaN(nCost)) {
      const newExpense = [...expenses, { name, cost }];
      setTotal(totalExpenses + nCost);
      setExpenses(newExpense);
    } else {
      alert("Please enter a valid number");
    }
  };
  const removeExpense = (index) => {
    // in react you have to create an entirely new list when adding a new item
    const newExpenses = [...expenses];
    setTotal(totalExpenses - parseFloat(newExpenses[index].cost));
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
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
              <h4>After Expenses</h4>
              <p>Yearly Salary: {salary - (totalExpenses * 12).toFixed(2)}</p>
              <p>
                Monthly Salary: {(salary / 12).toFixed(2) - totalExpenses.toFixed(2)}
              </p>
              <p>
                Weekly Salary:{" "}
                {(salary / 52).toFixed(2) - (totalExpenses / 52).toFixed(2)}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <div className="row">
              <div className="col">
                <h3>Monthly Expenses:</h3>
              </div>
              <div className="col">
                <p>{totalExpenses.toFixed(2)}</p>
              </div>
            </div>
            {expenses.map((expense, index) => (
              <Expense
                key={index}
                index={index}
                expense={expense}
                removeExpense={removeExpense}
              />
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
