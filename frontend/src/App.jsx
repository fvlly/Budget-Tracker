import React from "react";

import { Header } from "./components/Header";
import { AccountsCard } from "./components/AccountsCard";
import { TransactionSummary } from "./components/TransactionSummary";
import { TransactionCard } from "./components/TransactionCard";

export const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <AccountsCard />
        <TransactionSummary />
        <div className="flow m-top text-dark">
          <TransactionCard description="Food" amount="40000.00" />
          <TransactionCard description="Toiletries" amount="2500.00" />
          <TransactionCard description="Internet" amount="20000.00" />
        </div>
      </div>
    </>
  );
};
