import "./App.css";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeEpxense from "./components/IncomeExpense.jsx";
function App() {
  return (
    <div>
      <Header />
      <div className=".container">
        <Balance />
        <IncomeEpxense />
      </div>
    </div>
  );
}

export default App;
