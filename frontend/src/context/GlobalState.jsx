import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [
    // { id: 1, description: "Food", amount: -20000 },
    // { id: 2, description: "Toiletries", amount: -10000 },
    // { id: 3, description: "Internet", amount: -25000 },
    // { id: 4, description: "Salary", amount: 550000 },
  ]
};

// create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction,addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
