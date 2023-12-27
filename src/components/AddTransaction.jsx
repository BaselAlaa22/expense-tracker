import { useState } from "react";
function AddTransaction() {
  const [header, setHeader] = useState("");
  const [amount, setAmount] = useState(0);

  function handleHeaderChange(e) {
    setHeader(e.target.value);
    console.log(header);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
    console.log(amount);
  }

  return (
    <>
      <form>
        <h3>Add New Transaction</h3>
        <label>Transaction header</label>
        <input
          type="text"
          placeholder="Enter Header..."
          value={header}
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
          value={amount}
          onChange={handleAmountChange}
        ></input>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
