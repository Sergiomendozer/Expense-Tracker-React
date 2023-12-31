import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Money formatter function converts numbers to currency format
function moneyFormatter(num) {
  const p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); // Accessing transactions from GlobalContext

  const amounts = transactions.map((transaction) => transaction.amount); // Mapping over transactions to get amounts

  const total = amounts.reduce((acc, item) => (acc += item), 0); // Calculating the total balance

  return (
    <>
      <h4>Your Balance</h4> {/* Heading for the balance section */}
      <h1>{moneyFormatter(total)}</h1>{" "}
      {/* Displaying formatted total balance */}
    </>
  );
};
