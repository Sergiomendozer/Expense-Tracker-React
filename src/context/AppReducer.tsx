export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // Handles deleting a transaction from the list
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
        // Returns a new state with the specific transaction removed
      };
    case "ADD_TRANSACTION":
      // Handles adding a new transaction to the list
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        // Returns a new state with the new transaction added to the start of the transactions array
      };
    default:
      // Handles any actions that don't match the cases above
      return state;
    // Returns the current state unchanged
  }
};

// This JavaScript file is a reducer for a React application using the Context API. It manages the state of transactions, handling actions for deleting and adding transactions. For 'DELETE_TRANSACTION', it filters out the transaction to be deleted; for 'ADD_TRANSACTION', it adds a new transaction to the state. If the action type doesn't match, it simply returns the current state.
