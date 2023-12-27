import "./App.css";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeEpxense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
function App() {
  return (
    <div>
      <Header />
      <div className=".container">
        <Balance />
        <IncomeEpxense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
