/* eslint-disable no-console */
import { useState } from "react";
// import { Button } from "react-bootstrap";
import "./Budgeter.scss";

function Budgeter() {
  // let expenses = [];
  const [salary, setSalary] = useState(0);
  // const [expName, setName] = useState("");
  // const [expCost, setExpCost] = useState(0);

  const handleChange = (e) => {
    setSalary(e.target.value);
  };

  // Create Expense list through a different component
  // const changeName = (e) => {
  //   setName(e.target.value);
  // };
  // const changeCost = (e) => {
  //   setExpCost(e.target.value);
  // };
  // const newExpense = () => {
  //   let nExp = {
  //     name: expName,
  //     cost: expCost,
  //   };
  //   expenses.push(nExp);
  //   console.log(expenses);
  // };

  // eslint-disable-next-line no-unused-vars
  const textInput = {
    width: "20ch",
    borderRadius: "15px",
    margin: "2px",
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
              <p>Monthly Salary: {Math.floor(salary / 12)}</p>
              <p>Weekly Salary: {Math.floor(salary / 52)}</p>
            </div>
            {/* Expenses */}
            <div className="col">
              <h4>LeftOver</h4>
              <p>Yearly Salary: {salary}</p>
              <p>Monthly Salary: {Math.floor(salary / 12)}</p>
              <p>Weekly Salary: {Math.floor(salary / 52)}</p>
            </div>
          </div>
          <hr />
          {/* <div className="row">
            <div className="col">
              <h4>Expenses: </h4>
              <label htmlFor="expName"> Name: </label>
              <input
                type="text"
                name="expName"
                value={expName}
                style={textInput}
                onChange={changeName}
              />
              <label htmlFor="exp"> Cost: </label>
              <input
                type="text"
                name="exp"
                value={expCost}
                style={textInput}
                onChange={changeCost}
              />
              <Button onClick={newExpense}>Add</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">{expenses}</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Budgeter;
