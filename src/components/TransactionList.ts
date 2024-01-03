import React, { useContext } from "react";
import { Transaction } from "../components/Transaction"; 

import { GlobalContext } from "../context/GlobalState"; 

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); // Accessing transactions from the global context

  {/* Mapping through each transaction and rendering a Transaction component for each */}

  return (
      <h3>History</h3> 
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
  );
};

// return (
//   <>
//     <h3>History</h3> 
//     <ul className="list">
//       {transactions.map((transaction) => (
//         <Transaction key={transaction.id} transaction={transaction} />
//       ))}
//     </ul>
//   </>
// );
// };

