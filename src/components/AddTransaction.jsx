import { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case "addHeader":
      return { ...state, header: action.header };
    case "addAmount":
      return { ...state, amount: action.amount };
  }
  throw Error("uh oh!");
}
function AddTransaction() {
  const [state, dispatch] = useReducer(reducer, {
    header: "",
    amount: 0,
  });

  function handleHeaderChange(e) {
    dispatch({ type: "addHeader", header: e.target.value });
  }

  function handleAmountChange(e) {
    dispatch({ type: "addAmount", amount: e.target.value });
  }

  return (
    <>
      <form>
        <h3>Add New Transaction</h3>
        <label>Transaction header</label>
        <input
          type="text"
          placeholder="Enter Header..."
          value={state.header}
          onChange={handleHeaderChange}
        ></input>
        <label>
          Amount
          <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          placeholder="Enter amount..."
          value={state.amount}
          onChange={handleAmountChange}
        ></input>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
