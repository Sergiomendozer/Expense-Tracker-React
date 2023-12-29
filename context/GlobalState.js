import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state for the context
const initialState = {
  transactions: [], // Set to an empty array initially
};

// Create a context to share state and functions with child components
export const GlobalContext = createContext(initialState);

// Provider component that wraps the entire app
export const GlobalProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the AppReducer function
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Define actions to modify the state
  function deleteTransaction(id) {
    // Dispatch the action to delete a transaction
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    // Dispatch the action to add a new transaction
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Provide the state and actions to child components through the context
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
