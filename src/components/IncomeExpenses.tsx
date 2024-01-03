import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Function to format numbers into currency
function moneyFormatter(num) {
  const p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce((acc, num, i) => {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

// Component to display Income and Expenses
export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext); // Accessing global transaction context

  const amounts = transactions.map((transaction) => transaction.amount); // Getting all transaction amounts

  // Calculating total income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  // Calculating total expense
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4> {/* Section heading for income */}
        <p className="money plus">{moneyFormatter(income)}</p>{" "}
        {/* Formatted income display */}
      </div>
      <div>
        <h4>Expense</h4> {/* Section heading for expenses */}
        <p className="money minus">{moneyFormatter(expense)}</p>{" "}
        {/* Formatted expense display */}
      </div>
    </div>
  );
};
