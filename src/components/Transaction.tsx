import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Function to format number to currency string
function moneyFormatter(num) {
  const p = num.toFixed(2).split(".");
  return (
    "$ " +
    // Reverse the integer part, insert commas every three digits, then reverse back
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1] // Append the decimal part
  );
}

// Transaction component displays individual transaction details
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext); // Use deleteTransaction from context

  const sign = transaction.amount < 0 ? "-" : "+"; // Determine the sign based on amount

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)} {/* Format and display amount */}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x {/* Button to delete the transaction */}
      </button>
    </li>
  );
};
