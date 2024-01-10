import { useGlobalContext } from "../context";

function IncomeEpxense() {
  const { value } = useGlobalContext();
  var income = 0,
    expense = 0;
  value.forEach((element) => {
    if (element.amount > 0) {
      income += element.amount;
    } else {
      expense += element.amount;
    }
  });
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
}

export default IncomeEpxense;
