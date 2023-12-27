function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <li className="plus">
          Cash <span>$3000</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          Monitor <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
