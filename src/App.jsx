import "./App.css";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeEpxense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import GlobalContextProvider from "./context.jsx";

export const intialState = [
  { id: 1, header: "Flower", amount: -20 },
  { id: 2, header: "Salary", amount: 300 },
  { id: 3, header: "Book", amount: -10 },
  { id: 4, header: "Camera", amount: 150 },
];

function App() {
  return (
    <div>
      <Header />
      {/* context provider */}
      <GlobalContextProvider>
        <div className=".container">
          <Balance />
          <IncomeEpxense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
