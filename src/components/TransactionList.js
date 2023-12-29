import React, { useContext } from "react";
import { Transaction } from "./Transaction"; // Importing the Transaction component
import { GlobalContext } from "../context/GlobalState"; // Importing the GlobalContext

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); // Accessing transactions from the global context

  return (
    <>
      <h3>History</h3> {/* Section title */}
      <ul className="list">
        {/* Mapping through each transaction and rendering a Transaction component for each */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
