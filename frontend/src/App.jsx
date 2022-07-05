
import { Header } from "./components/Header";
import { AccountsCard } from "./components/AccountsCard";
import { TransactionList } from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";
import AddExpenseModal from "./components/AddExpenseModal";


export const App = () => {
  
  return (
    <GlobalProvider>
      <div className="app-container">
        <Header />
        <AccountsCard />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
};
