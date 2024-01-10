import { useReducer } from "react";
import GlobalContextProvider, { useGlobalContext } from "../context";

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
  const { value, addValue } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, {
    header: "",
    amount: 0,
  });

  function handleHeaderChange(e) {
    dispatch({ type: "addHeader", header: e.target.value });
  }

  function handleAmountChange(e) {
    dispatch({ type: "addAmount", amount: Number(e.target.value) });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    addValue(state);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Add New Transaction</h3>
        <label>Transaction header</label>
        <input
          type="text"
          placeholder="Enter Header..."
          value={state.header}
          onChange={handleHeaderChange}
          required
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
          required
        ></input>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
