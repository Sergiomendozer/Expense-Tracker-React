import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

// Component for adding a new transaction
export const AddTransaction = () => {
  // State for input text and amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Accessing the addTransaction function from GlobalContext
  const { addTransaction } = useContext(GlobalContext);

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behaviour

    // Creating a new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Unique id for key prop
      text, // Text from state
      amount: +amount, // Amount from state, converting string to number
    };

    addTransaction(newTransaction); // Invoke the addTransaction method from context
  };

  // Render the form
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
