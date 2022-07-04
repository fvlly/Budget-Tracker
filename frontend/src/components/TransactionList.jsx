import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionCard } from "./TransactionCard";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className="history-container flex bg-light m-top m-bottom ">
        <p>Transactions</p>
        <a href="http://">View all</a>
      </div>
      <ul className="list flow">
        {transactions.map((transaction) => {
          const { id, description, amount } = transaction;
          return <TransactionCard key={id} amount={amount} description={description} />;
        })}
      </ul>
    </>
  );
};
